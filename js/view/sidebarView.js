
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
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)

	container.load("fragments/sidebar.html", function() {
		this.numberOfGuests = container.find("#numberOfGuests");
		this.plusButton = container.find("#plusGuest");
		this.minusButton = container.find("#minusGuest");
		this.dishes = container.find("#dishes");
		
		this.numberOfGuests.html(model.getNumberOfGuests());

		var menu = model.getFullMenu();
		this.dishes.html(showDishes(model.getFullMenu(), model));
	})
	
}

