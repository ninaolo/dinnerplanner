//DinnerModel Object constructor
var DinnerModel = function() {
 
	//TODO Lab 2 implement the data structure that will hold number of guest
	// and selected dinner options for dinner menu

	var numberOfGuests = 8;
	var menu = {};
	var observers = [];

	this.addObserver = function(observer) {
		observers.push(observer);
	};

	this.notifyObservers = function(eventName, obj) {
		for (var i = 0; i < observers.length; i++) {
			observers[i].update(eventName, obj);
		}

	};

	this.setNumberOfGuests = function(num) {
		if (num > 0) {
			numberOfGuests = num;
			this.notifyObservers("update.numberOfGuests");
		}
	};

	// should return 
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

	//Returns all ingredients for all the dishes on the menu.
	this.getAllIngredients = function() {
		for (var key in menu) {
			var dish = this.getDish(menu[key].RecipeID);
		}
	};

	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function() {
		var totalMenuPrice = 0;
		for(var key in menu){
			totalMenuPrice += this.getTotalDishPrice(menu[key].RecipeID);
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
	this.getTotalDishPrice = function(id) {
        var dish = this.getMenuDishById(id);
        var total = 0;
        for(var i = 0; i < dish.Ingredients.length; i++) {
            total += numberOfGuests * dish.Ingredients[i].Quantity;
        }
        return total;
	};

	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	this.addDishToMenu = function(id) {
		this.getDish(id, function(dish) { // Callback function which runs when ajax is complete
            if(dish.Category in menu){
                delete menu[dish.Category];
            }
            menu[dish.Category] = dish;
            this.notifyObservers("menu.update");
        }.bind(this));
	};

	//Removes dish from menu
	this.removeDishFromMenu = function(id) {
		this.getDish(id, function(dish) { // Callback function which runs when ajax is complete
			delete menu[dish.Category];
			this.notifyObservers("menu.update");
		}.bind(this));
	};


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
            }
		});
	}

	//function that returns a dish of specific ID
	this.getDish = function (id, callbackFunction) {
		var apiKey = "18f3cT02U9f6yRl3OKDpP8NA537kxYKu";
		var url = "http://api.bigoven.com/recipe/" + id
			+ "?api_key=" + apiKey;
		$.ajax({
			type: "GET",
			dataType: 'json',
			cache: false,
			url: url,
			success: function (dish) {
				//this.notifyObservers("ajax.getDish", data);
                callbackFunction(dish); // Run the callback function
			}.bind(this),
            error: function () {
				this.notifyObservers("errorOccurred");
            }
		});
	}

}