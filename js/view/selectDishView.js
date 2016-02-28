

var SelectDishView = function (container, model) {

    model.addObserver(this);

	this.container = container;
	this.searchButton = container.find("#searchButton");
	this.keyValues = container.find("#keyValues");
    this.dishSelect = container.find("#dishTypeSelection");
    this.showSearchResults = container.find("#showSearchResults");

    this.showResults = function(dishes) {

        html = "<div class='row'>";

        for (var i = 0; i < dishes.length; i++) {
            html += "<div class='col-md-3'>";
            html += "<div class='image-box dish' id='" + dishes[i].id + "'>";
            html += "<img src='" + (dishes[i].ImageURL === null ? "" : dishes[i].ImageURL) + "' />";
            var name = dishes[i].name.substring(0,15);
            if (dishes[i].name.length > 15) {
                name += "...";
            }
            html += "<div class='desc'><p>" + name + "</p></div>"
            html += "</div>";
            if (dishes[i].description.length > 90) {
                html += "<p>" + dishes[i].description.substr(0,90) + "...</p>";
            } else {
                html += "<p>" + dishes[i].description + "</p>"
            }
            html += "</div>";
        }
        html += "</div>";

        this.showSearchResults.html(html);
    }

    this.fillOptions = function(types) {
        html = "";
        for (var i = 0; i < types.length; i++) {
            html += "<option>" + types[i] + "</option>";
        }
        return html;
    }

    this.update = function(eventName, searchResults) {
        console.log(eventName);
        if(eventName === "ajax.getAllDishes") {
            this.showResults(searchResults);
        }
    }

	var types = model.getDishTypes();
    this.dishSelect.html(this.fillOptions(types));

    var dishType = container.find("#dishTypeSelection option:selected").text();
    var filter = this.keyValues.val();
    model.getAllDishes(dishType, filter); // AJAX call
    var spinner = new Spinner().spin();
    this.showSearchResults.html(spinner.el);

}