
function showSearchResults(dishes) {
	html = "<div class='row'>";

	for (var i = 0; i < dishes.length; i++) {
		html += "<div class='col-md-3'>";
		html += "<div class='image-box dish'>";
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

function fillOptions(types) {
	console.log(types);
	html=""
	for (var i = 0; i<types.length; i++){
		html += "<option>" + types[i] + "</option>";
	}
	return html;
}

//ExampleView Object constructor
var SelectDishView = function (container, model) {

	model.addObserver(this);
	this.container = container;
	this.searchButton = container.find("#searchButton");
	this.keyValues = container.find("#keyValues");


	var types = model.getDishTypes();
	container.find("#dishTypeSelection").html(fillOptions(types));

	var dishType = container.find("#dishTypeSelection option:selected").text()
	this.showSearchResults = container.find("#showSearchResults");
	console.log(dishType);

	var dishes = model.getAllDishes(dishType);
	this.showSearchResults.html(showSearchResults(dishes));
	this.images = container.find(".image-box.dish");

	//$(".btn.ship")


}