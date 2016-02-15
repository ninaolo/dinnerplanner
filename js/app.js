$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	var sidebarView = new SidebarView($("#sidebarView"), model);
	var selectDishView = new SelectDishView($("#selectDishView"), model);
	var homeView = new HomeView($("#homeView"), model);
	var dishDetailsView = new DishDetailsView($("#dishDetailsView"), model);

	// hide() and show() will later be fixed with controllers
	$("#homeView").hide();
	$("#sidebarView").hide();
	$("#selectDishView").hide();
	$("#dishDetailsView").hide();



	// SCREEN 1 - HOME

	$("#homeView").show();

	// SCREEN 2 - SELECT DISH

	//$("#sidebarView").show();
	//$("#selectDishView").show();

	// SCREEN 3 - DISH DETAILS

	//$("#sidebarView").show();
	//$("#dishDetailsView").show();

});