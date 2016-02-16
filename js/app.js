$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	var sidebarView = new SidebarView($("#sidebarView"), model);
	var selectDishView = new SelectDishView($("#selectDishView"), model);
	var homeView = new HomeView($("#homeView"), model);
	var dishDetailsView = new DishDetailsView($("#dishDetailsView"), model);
	var backAndEditView = new BackAndEditView ($("backAndEditView"), model);
	
	// hide() and show() will later be fixed with controllers
	$("#homeView").hide();
	$("#sidebarView").hide();
	$("#selectDishView").hide();
	$("#dishDetailsView").hide();
	$("backAndEditView").hide();



	// SCREEN 1 - HOM
	
	//$("#homeView").show();

	// SCREEN 2 - SELECT DISH

	//$("#sidebarView").show();
	//$("#selectDishView").show();

	// SCREEN 3 - DISH DETAILS

	//$("#sidebarView").show();
	//$("#dishDetailsView").show();

	// SCREEN 5 - DINNER OVERVIEW 

	$("#backAndEditView").show();

});