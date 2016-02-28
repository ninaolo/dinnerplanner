$(function() {

	var dinnerModel = new DinnerModel();
	
	var sidebarView = new SidebarView($("#sidebarView"), dinnerModel);
	var selectDishView = new SelectDishView($("#selectDishView"), dinnerModel);
	var homeView = new HomeView($("#homeView"), dinnerModel);
	var dishDetailsView = new DishDetailsView($("#dishDetailsView"),dinnerModel);
	var backAndEditView = new BackAndEditView ($("#backAndEditView"), dinnerModel);
	var instructionsView = new InstructionsView ($("#instructionsView"), dinnerModel);
	var dinnerView = new DinnerView($("#dinnerView"), dinnerModel);

	var sidebarController = new SidebarController(sidebarView, dinnerModel, dinnerView, selectDishView, backAndEditView);
	var dishDetailsController = new DishDetailsController(dishDetailsView,selectDishView,dinnerModel);
	var homeController = new HomeController(homeView,sidebarView,selectDishView);
	var dinnerController = new DinnerController(dinnerView, dinnerModel, instructionsView);
	var backAndEditController = new BackAndEditController(backAndEditView, selectDishView, instructionsView, dinnerView, sidebarView);
	var selectDishController = new SelectDishController(selectDishView,dishDetailsView, dinnerModel);

	// hide() and show() will later be fixed with controllers
	$("#homeView").hide();
	$("#sidebarView").hide();
	$("#selectDishView").hide();
	$("#dishDetailsView").hide();
	$("#backAndEditView").hide();
	$("#instructionsView").hide();
	$("#dinnerView").hide();



	// SCREEN 1 - HOM
	
	//$("#homeView").show();

	// SCREEN 2 - SELECT DISH

	$("#sidebarView").show();
	$("#selectDishView").show();

	// SCREEN 3 - DISH DETAILS

	//$("#sidebarView").show();
	//$("#dishDetailsView").show();

	// SCREEN 5 - DINNER OVERVIEW 

	//$("#backAndEditView").show();
	//$("#dinnerView").show();

	// SCREEN 6 - INSTRUCTIONS

	//$("#backAndEditView").show();
	//$("#instructionsView").show();

});