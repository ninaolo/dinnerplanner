// Here we create an Angular service that we will use for our 
// model. In your controllers (or other services) you can include the
// dependency on any service you need. Angular will insure that the
// service is created first time it is needed and then just reuse it
// the next time.
dinnerPlannerApp.factory('Dinner',function ($resource) {

  // TODO in Lab 5: Add your model code from previous labs
  // feel free to remove above example code
  // you will need to modify the model (getDish and getAllDishes) 
  // a bit to take the advantage of Angular resource service
  // check lab 5 instructions for details

  var BIGOVEN_KEY = "66J8l00npnHHZcCNLRhxkfW1OHxbojy4";

  this.DishSearch = $resource('http://api.bigoven.com/recipes',{pg:1,rpp:25,api_key: BIGOVEN_KEY});
  this.Dish = $resource('http://api.bigoven.com/recipe/:id',{api_key: BIGOVEN_KEY});


  var numberOfGuests = 8;
  var menu = {};

  this.setNumberOfGuests = function(num) {
    if (num > 0) {
      numberOfGuests = num;
    }
  };

  this.getNumberOfGuests = function() {
    return numberOfGuests;
  };

  //Returns a list of all types of dishes
  this.getDishTypes = function() {
    var types = ["Starter", "Main Dish", "Dessert"];
    return types;

  };

  //Returns the dish that is on the menu for selected type
  this.getSelectedDish = function(type) {
    return menu[type];
  };

  //Returns all the dishes on the menu.
  this.getFullMenu = function() {
    var fullMenu = [];
    for (var key in menu) {
      fullMenu.push(menu[key]);
    }
    return fullMenu;
  };


  //Returns the total price of the menu (all the ingredients multiplied by number of guests).
  this.getTotalMenuPrice = function() {
    var totalMenuPrice = 0;
    for(var key in menu){
      totalMenuPrice += this.getTotalDishPrice(menu[key]);
    }
    return totalMenuPrice;
  };

  // Helper method
  this.getMenuDishById = function(id) {
    for(var key in menu) {
      if (menu[key].RecipeID === id) {
        return menu[key];
      }
    }
  };

  //Returns the total price for a specific dish in the menu (all ingredients multiplied by the number of guests)
  this.getTotalDishPrice = function(dish) {
      var total = 0;
      for(var i = 0; i < dish.Ingredients.length; i++) {
        total += numberOfGuests * dish.Ingredients[i].Quantity;
      }
      return Math.round(total);
  };

  //Adds the passed dish to the menu. If the dish of that type already exists on the menu
  //it is removed from the menu and the new one added.
  this.addDishToMenu = function(dish, type) {
    if(type in menu) {
        delete menu[type];
    }
    menu[type] = dish;
    console.log(menu);
    console.log(dish);
  };

  //Removes dish from menu
  this.removeDishFromMenu = function(id) {
    for (var key in menu) {
      if (menu[key].RecipeID == id) {
        delete menu[key];
        console.log(menu);
      }
    }
  };



  // Angular service needs to return an object that has all the
  // methods created in it. You can consider that this is instead
  // of calling var model = new DinnerModel() we did in the previous labs
  // This is because Angular takes care of creating it when needed.
  return this;

});