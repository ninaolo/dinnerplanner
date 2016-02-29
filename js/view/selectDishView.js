

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
            html += "<div class='image-box dish' id='" + dishes[i].RecipeID + "'>";
            html += "<img src='" + (dishes[i].ImageURL === null ? "" : dishes[i].ImageURL) + "' />";
            var name = dishes[i].Title.substring(0,15);
            if (dishes[i].Title.length > 15) {
                name += "...";
            }
            html += "<div class='desc'><p>" + name + "</p></div>"
            html += "</div>";
            if (dishes[i].Description !== undefined) {
                if (dishes[i].Description.length > 90) {
                    html += "<p>" + dishes[i].Description.substr(0,90) + "...</p>";
                } else {
                    html += "<p>" + dishes[i].Description + "</p>"
                }
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
        if(eventName === "ajax.getAllDishes" && searchResults !== undefined) {
            this.showResults(searchResults);
        }
        else if(eventName === "errorOccurred" || searchResults === undefined) {
            this.showSearchResults.html("Could not load results.");
        }
    }

	var types = model.getDishTypes();
    this.dishSelect.html(this.fillOptions(types));
    this.dishType = container.find("#dishTypeSelection option:selected").text();
    var filter = this.keyValues.val();
    model.getAllDishes(this.dishType, filter); // AJAX call
    var spinner = new Spinner().spin();
    this.showSearchResults.html(spinner.el);

}