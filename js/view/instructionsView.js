
var InstructionsView = function (container, model) {

	this.menu = model.getFullMenu();
	if (this.menu.length > 0) {

		if(this.menu['starter'] !== undefined) {
			this.loadDish(container.find("#starter"), this.menu[0]);
		}
		if(this.menu['main dish'] !== undefined) {
			console.log(this.menu['main dish']);
			this.loadDish(container.find("#main"), this.menu[1]);
		}
		if(this.menu['dessert'] !== undefined) {
			this.loadDish(container.find("#dessert"), this.menu[2]);
		}

	}

}

InstructionsView.prototype.loadDish = function(container, dish) {
	container.find("#dishPic").attr("src", "images/" + dish.image);
	container.find("#dishName").append(dish.name);
	container.find("#dishInstructions").append(dish.description);
}