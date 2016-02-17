
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

	container.load("fragments/sidebar.html", function() {
		container.find("#numberOfGuests").html(model.getNumberOfGuests());
		var menu = model.getFullMenu();
		container.find("#dishes").html(showDishes(model.getFullMenu(), model));

		// OBS: detta ska flyttas till controller sen
		container.find("#plusGuest").click(function() {model.setNumberOfGuests(model.getNumberOfGuests()+1);});
		container.find("#minusGuest").click(function() {model.setNumberOfGuests(model.getNumberOfGuests()-1);});
	})

	this.update = function(obj) {
		container.find("#numberOfGuests").html(model.getNumberOfGuests());
	}
	
}

