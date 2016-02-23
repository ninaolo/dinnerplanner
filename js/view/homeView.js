//ExampleView Object constructor
var HomeView = function (container, model) {

	model.addObserver(this);

	this.container = container;
	this.newDinner = container.find("#newDinner");

}