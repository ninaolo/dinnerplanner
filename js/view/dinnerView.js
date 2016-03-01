

function dinnerDishes(dishes, model, dinnerDishes) {

	var totalCost = 0;
	var html = "";

	for (var i = 0; i < dishes.length; i++) {

		html += '<div class="col-md-3" id="dish">';
		html += '<div class="image-box">';
		html += "<img src='" + (dishes[i].ImageURL === null ? "" : dishes[i].ImageURL) + "' />";
		html += '<div class="desc">';
        var name = dishes[i].Title.substring(0,15);
        if (dishes[i].Title.length > 15) {
            name += "...";
        }
		html += '<p id="name">' + name + '</p>';
		html += '</div>';
		html += '</div>';
		html += '<p id="cost">' + model.getTotalDishPrice(dishes[i].RecipeID) + ' SEK</p>';
		html += '</div>';

		totalCost += model.getTotalDishPrice(dishes[i].RecipeID);
	}

	html += '<div id="totalCost" class="col-md-3">';
		html += '<p>Total:</p><p id="cost">' + totalCost + ' SEK</p>';
	html += '</div>';

	dinnerDishes.html(html);

	return totalCost;
}


var DinnerView = function (container, model) {

	model.addObserver(this);
	this.container = container;

	this.dinnerDishes = this.container.find("#dinnerDishes");
	this.printRecipe = this.container.find("#printFullRecipe");

	this.update = function(eventName, obj) {
		if (eventName === "menu.update") {
			var dishes = model.getFullMenu();
			dinnerDishes(dishes, model, this.dinnerDishes);
		}
	}

	this.update();

}




