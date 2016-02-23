function fillIngredientsTable(container, ingredientList) {

	var totalCost = 0;

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

var DishDetailsView = function (container, model, selectedDish) {

	model.addObserver(this);
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.selectedDish = selectedDish;
	this.confirmDish = container.find("#confirmDish");
	this.backSelectDish = container.find("#backSelectDish");
	this.container = container;

	this.dish = model.getDish(selectedDish);
	container.find("#dishName").html(this.dish.name);
	container.find("#dishPic").attr("src", "images/" + this.dish.image);
	container.find("#dishPreparation").html(this.dish.description);
	container.find("#nrOfPeople").html(model.getNumberOfGuests());
	fillIngredientsTable(container, this.dish.ingredients);

	
}