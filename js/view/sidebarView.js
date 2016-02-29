
function showDishes(dishes, model) {
	var html = "";

	for (var i = 0; i < dishes.length; i++) {
		html += "<div class='row'>";

		html += "<div class='col-md-6'>";
		html += dishes[i].name;
		html += "</div>";

		html += "<div class='col-md-4'>";
		html += model.getTotalDishPrice(dishes[i].id);
		html += "</div>";

		html += "<div class='col-md-2'>";
		html += "<span id='remove-" + dishes[i].id + "' class='glyphicon glyphicon-remove' aria-hidden='true'></span>"
		html += "</div>";

		html += "</div>";
	}

	html += "<hr>";
	html += "<div class='row'>";
	html += "<div class='col-md-6 col-md-offset-6'>";
	html += "SEK " + model.getTotalMenuPrice();
	html += "</div>";
	html += "</div>";

	return html;
}


var SidebarView = function (container, model) {

	model.addObserver(this);
	this.container = container;

	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusGuest = container.find("#plusGuest");
	this.minusGuest = container.find("#minusGuest");
	this.confirmButton = container.find("#confirmDinner");
	this.dishes = container.find("#dishes");

	this.numberOfGuests.html(model.getNumberOfGuests());
	var menu = model.getFullMenu();
	this.dishes.html(showDishes(model.getFullMenu(), model));


	this.update = function(eventName) {
		console.log("update");
		if (eventName === "menu.update") {
			this.dishes.html(showDishes(model.getFullMenu(), model));
			if (model.getFullMenu().length > 0) {
				this.confirmButton.show(300);
			} else {
				this.confirmButton.hide(300);
			}
		} else if (eventName === "update.NumberOfGuests") {
			container.find("#numberOfGuests").html(model.getNumberOfGuests());
		}



	}
	
}

