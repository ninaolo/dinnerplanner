$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	// sidebarView
	var sidebarView = new SidebarView($("#sidebarView"), model);

	// selectDishView
	var selectDishView = new SelectDishView($("#selectDishView"), model);

});