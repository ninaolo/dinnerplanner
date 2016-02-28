
var InstructionsView = function (container, model) {

    model.addObserver(this);

	this.container = container;

    this.loadDish = function(dish) {

        html = "";
        html += '<div class="row">';
        html += '<div class="col-md-3">';
        html += '<img src="' + 'images/' + dish.image + '">';
        html += '</div>';
        html += '<div class="col-md-4">';
        html += '<h1>' + dish.name + '</h1>';
        html += '<p><br><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></p>';
        html += '</div>';
        html += '<div class="col-md-4 col-md-offset-1">';
        html += '<h1>Preparation</h1>';
        html += '<p>' + dish.description + '</p>';
        html += '</div></div>';

        container.append(html);
    }

    this.update = function(obj) {
        this.container.html("");
        this.menu = model.getFullMenu();

        for(var i = 0; i < this.menu.length; i++) {
            this.loadDish(this.menu[i]);
        }
    }

    this.update();
}