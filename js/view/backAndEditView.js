

var BackAndEditView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)

	container.load("fragments/back_and_edit.html", function() {
		this.numberOfGuests = container.find("#numberOfGuests");
		this.numberOfGuests.html(model.getNumberOfGuests());
	});
}