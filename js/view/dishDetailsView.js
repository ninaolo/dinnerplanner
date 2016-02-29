

var DishDetailsView = function (container, model) {

	model.addObserver(this);

    this.selectedDish = 1;

	this.confirmDish = container.find("#confirmDish");
	this.backSelectDish = container.find("#backSelectDish");
	this.container = container;

    this.fillDishInfo = function(dish) {
        container.find("#dishName").html(dish.Title);
        container.find("#dishPic").attr("src", (dish.ImageURL === null ? "" : dish.ImageURL));
        container.find("#dishPreparation").html(dish.Instructions);
        container.find("#nrOfPeople").html(model.getNumberOfGuests());
    };

    this.fillIngredientsTable = function(dish) {
        console.log(dish);

        var totalCost = 0;
        var ingredientList = dish.Ingredients;
        var guests = model.getNumberOfGuests();

        var ingredientsTable = container.find("#ingredientsTable");
        ingredientsTable.html("");

        for (var i = 0; i < ingredientList.length; i++) {
            ingredientsTable.append("<tr>");
            ingredientsTable.append("<td>" + Math.round(ingredientList[i].Quantity * guests) + " " + (ingredientList[i].Unit === null ? "" : ingredientList[i].Unit) + "</td>");
            ingredientsTable.append("<td>" + ingredientList[i].Name + "</td>");
            ingredientsTable.append("<td>SEK</td>");
            ingredientsTable.append("<td>" + guests + "</td>");
            ingredientsTable.append("</tr>");
            totalCost += ingredientList[i].price * guests;
        }

        container.find("#totalCurrency").html("<p>SEK</p>");
        container.find("#total").html(totalCost);
    };

    this.update = function(eventName, dish) {
        if(eventName === ("ajax.getDish" || "update.numberOfPeople")) {
            this.fillIngredientsTable(dish);
            this.fillDishInfo(dish);
        } else if(eventName === "errorOccurred"){
            this.container.find("#dishName").html("Was not able to find details about the dish: "+ dish);
        }

    };

	this.setSelectedDish = function(dish) {
		this.selectedDish = dish;
	};

	
};