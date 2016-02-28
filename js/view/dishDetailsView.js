

var DishDetailsView = function (container, model) {

	model.addObserver(this);

    this.selectedDish = 1;

	this.confirmDish = container.find("#confirmDish");
	this.backSelectDish = container.find("#backSelectDish");
	this.container = container;

    this.fillDishInfo = function(dish) {
        container.find("#dishName").html(dish.name);
        container.find("#dishPic").attr("src", "images/" + dish.image);
        container.find("#dishPreparation").html(dish.description);
        container.find("#nrOfPeople").html(model.getNumberOfGuests());
    };

    this.fillIngredientsTable = function(dish) {

        var totalCost = 0;
        var ingredientList = dish.Ingredients;
        var guests = model.getNumberOfGuests();

        container.find("#quantity").html("");
        container.find("#ingredient").html("");
        container.find("#currency").html("");
        container.find("#cost").html("");
        console.log("INGREDIENTS: " + ingredientList);
        for (var i = 0; i < ingredientList.length; i++) {
            container.find("#quantity").append("<p>" + ingredientList[i].quantity * guests + " " + ingredientList[i].unit + "</p>");
            container.find("#ingredient").append("<p>" + ingredientList[i].name + "</p>");
            container.find("#currency").append("<p>SEK</p>");
            container.find("#cost").append("<p>" + ingredientList[i].price * guests + "</p>");
            totalCost += ingredientList[i].price * guests;
        }

        container.find("#totalCurrency").html("<p>SEK</p>");
        container.find("#total").html(totalCost);
    };

    this.update = function(dish) {
        this.fillIngredientsTable(dish);
        this.fillDishInfo(dish);
    };

	this.setSelectedDish = function(dish) {
		this.selectedDish = dish;
	};

    model.getDish(this.selectedDish);
	
};