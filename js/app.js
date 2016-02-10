$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var exampleView = new ExampleView($("#exampleView"), model);

	// sidebarView
	var sidebarView = new SidebarView($("#sidebarView"), model);

	//And create the needed controllers and views
	var sideView = new SideView($("#sideView"), model);

});