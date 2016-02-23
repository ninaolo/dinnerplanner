function loadDish(container, dish) {
	container.find("#dishPic").attr("src", "images/" + dish.image);
	container.find("#dishName").append(dish.name);
	container.find("#dishInstructions").append(dish.description);
}

var InstructionsView = function (container, model) {

	this.menu = model.getFullMenu();
	loadDish(container.find("#starter"), this.menu[0]);
	loadDish(container.find("#main"), this.menu[1]);
	loadDish(container.find("#dessert"), this.menu[2]);

	
}