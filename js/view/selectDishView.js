
function showSearchResults(dishes) {
	html = "<div class='row'>";

	for (var i = 0; i < dishes.length; i++) {
		html += "<div class='col-md-3'>";
		html += "<div class='image-box'>";
		html += "<img src='images/" + dishes[i].image + "' />";
		html += "<div class='desc'><p>" + dishes[i].name + "</p></div>"
		html += "</div>";
		if (dishes[i].description.length > 90) {
			html += "<p>" + dishes[i].description.substr(0,90) + "...</p>";
		} else {
			html += "<p>" + dishes[i].description + "</p>"
		}
		html += "</div>";
	}
	html += "</div>";
	return html;
}

//ExampleView Object constructor
var SelectDishView = function (container, model) {

	container.load("fragments/select.html", function() {
		var dishType = "Main";
		this.dishType = container.find("#dishType");
		this.dishType.html(dishType);

		this.showSearchResults = container.find("#showSearchResults");
		var dishes = model.getAllDishes("main dish");
		this.showSearchResults.html(showSearchResults(dishes));
	});

	
}