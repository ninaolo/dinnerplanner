
var InstructionsView = function (container, model) {

    model.addObserver(this);

	this.container = container;

    this.loadDish = function(dish) {

        html = "";
        html += '<div class="row">';
        html += '<div class="col-md-3">';
        html += "<img src='" + (dish.ImageURL === null ? "http://redirect.bigoven.com/pics/recipe-no-image.jpg" : dish.ImageURL) + "' />";
        html += '</div>';
        html += '<div class="col-md-4">';
        html += '<h1>' + dish.Title + '</h1>';
        html += '<p><br><span>'+dish.Description+'</span></p>';
        html += '</div>';
        html += '<div class="col-md-4 col-md-offset-1">';
        html += '<h1>Preparation</h1>';
        html += '<p>' + dish.Instructions + '</p>';
        html += '</div></div>';

        container.append(html);
    }

    this.update = function(eventName) {
        this.container.html("");
        this.menu = model.getFullMenu();

        for(var i = 0; i < this.menu.length; i++) {
            this.loadDish(this.menu[i]);
        }
    }

    this.update();
}