

var DishDetailsView = function (container, model) {

	model.addObserver(this);

    this.selectedDish = 1;

	this.confirmDish = container.find("#confirmDish");
	this.backSelectDish = container.find("#backSelectDish");
	this.container = container;

    this.fillDishInfo = function() {
        var dish = model.getDish(this.selectedDish);
        container.find("#dishName").html(dish.name);
        container.find("#dishPic").attr("src", "images/" + dish.image);
        container.find("#dishPreparation").html(dish.description);
        container.find("#nrOfPeople").html(model.getNumberOfGuests());
    }

    this.fillIngredientsTable = function() {

        var totalCost = 0;
        var ingredientList = model.getDish(this.selectedDish).ingredients;

        for (var i = 0; i < ingredientList.length; i++) {
            container.find("#quantity").append("<p>" + ingredientList[i].quantity + " " + ingredientList[i].unit + "</p>");
            container.find("#ingredient").append("<p>" + ingredientList[i].name + "</p>");
            container.find("#currency").append("<p>SEK</p>");
            container.find("#cost").append("<p>" + ingredientList[i].price + "</p>")
            totalCost += ingredientList[i].price;
        };

        container.find("#totalCurrency").html("<p>SEK</p>")
        container.find("#total").html(totalCost);
    }

	this.update = function(obj) {
        this.fillIngredientsTable();
        this.fillDishInfo();
    }

	this.setSelectedDish = function(dish) {
		this.selectedDish = dish;
	}

    this.update();
	
}