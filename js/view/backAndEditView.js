

var BackAndEditView = function (container, model) {
	
	model.addObserver(this);

	this.container = container;
	this.backAndEditButton = container.find("#backAndEdit");
	this.numberOfGuests = container.find("#numberOfGuests");

	this.update = function(obj) {
		this.numberOfGuests.html(model.getNumberOfGuests());
	}

	this.update();
}