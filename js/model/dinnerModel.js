//DinnerModel Object constructor
var DinnerModel = function() {
 
	//TODO Lab 2 implement the data structure that will hold number of guest
	// and selected dinner options for dinner menu

	var numberOfGuests = 8;
	var menu = {};
	var observers = [];

	this.addObserver = function(observer) {
		observers.push(observer);
	}

	this.notifyObservers = function(eventName, obj) {
		for (var i = 0; i < observers.length; i++) {
			observers[i].update(eventName, obj);
		}

	}

	this.setNumberOfGuests = function(num) {
		if (num > 0) {
			numberOfGuests = num;
			this.notifyObservers("update.numberOfGuests");
		}
	}

	// should return 
	this.getNumberOfGuests = function() {
		return numberOfGuests;
	}

	//Returns a list of all types of dishes
	this.getDishTypes = function() {
		var types = ["starter", "main dish", "dessert"];
		/*for(var key in dishes) {
			if( types.indexOf(dishes[key].type) === -1 ){
				types.push(dishes[key].type);
			}
		}*/
		return types;

	}

	//Returns the dish that is on the menu for selected type 
	this.getSelectedDish = function(type) {
		return menu[type];
	}

	//Returns all the dishes on the menu.
	this.getFullMenu = function() {
		var fullMenu = [];
		for (var key in menu) {
			fullMenu.push(this.getDish(menu[key]));
		}
		return fullMenu;
	}

	//Returns all ingredients for all the dishes on the menu.
	this.getAllIngredients = function() {
		for (var key in menu) {
			var dish = this.getDish(menu[key]);
		}
	}

	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function() {
		var totalMenuPrice = 0;
		for(var key in menu){
			totalMenuPrice += this.getTotalDishPrice(menu[key]);
		}
		return totalMenuPrice;
	}

	//Returns the total price for a specific dish in the menu (all ingredients multiplied by the number of guests)
	this.getTotalDishPrice = function(id) {
		var dish = this.getDish(id);
		var total = 0;
		for(var i = 0; i < dish.ingredients.length; i++) {
			total += dish.ingredients[i].price * numberOfGuests;
		}
		return total;
	}

	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	this.addDishToMenu = function(id) {
		var dish = this.getDish(id);
		if(dish.type in menu){
			delete menu[dish.type];
		} 
		menu[dish.type] = dish.id;
		this.notifyObservers("menu.update");
	}

	//Removes dish from menu
	this.removeDishFromMenu = function(id) {
		delete menu[this.getDish(id).type];
		this.notifyObservers("menu.update");
	}

	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned
	this.getAllDishes = function (type, filter) {
		var apiKey = "18f3cT02U9f6yRl3OKDpP8NA537kxYKu";
		var url = "http://api.bigoven.com/recipes?pg=1&rpp=25&api_key=" + apiKey;

        if (filter !== undefined && filter !== "") {
            url += "&title_kw=" + filter;
        }
		if(type !== undefined && type !== ""){
			url+="&any_kw=" + type;
		}
        console.log(url);
		$.ajax({
			type: "GET",
			dataType: 'json',
			cache: false,
			url: url,
			success: function (data) {
				this.notifyObservers("ajax.getAllDishes", data.Results);
			}.bind(this),
            error: function () {
				if (filter !== undefined && filter !== "") {
					this.notifyObservers("errorOccurred",type);
				}
				else{
					this.notifyObservers("errorOccurred",filter);
				}
                //alert("There was an error loading all dishes.");
            }
		});
	}

	//function that returns a dish of specific ID
	this.getDish = function (id) {
		var apiKey = "18f3cT02U9f6yRl3OKDpP8NA537kxYKu";
		var url = "http://api.bigoven.com/recipe/" + id
			+ "?api_key=" + apiKey;
		$.ajax({
			type: "GET",
			dataType: 'json',
			cache: false,
			url: url,
			success: function (data) {
				this.notifyObservers("ajax.getDish", data);
			}.bind(this),
            error: function () {
				this.notifyObservers("errorOccurred");
            }
		});
	}

}