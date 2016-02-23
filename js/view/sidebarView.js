
function showDishes(dishes, model) {
	var html = "";

	for (var i = 0; i < dishes.length; i++) {
		html += "<div class='row'>";

		html += "<div class='col-md-6'>";
		html += dishes[i].name;
		html += "</div>";
		html += "<div class='col-md-6'>";

		html += model.getTotalDishPrice(dishes[i].id);
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


	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusGuest = container.find("#plusGuest");
	this.minusGuest = container.find("#minusGuest");
	container.find("#numberOfGuests").html(model.getNumberOfGuests());
	var menu = model.getFullMenu();
	container.find("#dishes").html(showDishes(model.getFullMenu(), model));



	this.update = function(obj) {
		container.find("#numberOfGuests").html(model.getNumberOfGuests());
	}
	
}

