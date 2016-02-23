
var DishDetailsController = function(dishDetailsView,selectDishView, dinnerModel) {
    this.dishDetailsView = dishDetailsView;
    this.dinnerModel = dinnerModel;
    this.selectedDishView = selectDishView;

    this.setEvents();
    sidebarView.plusGuest.click(function() {dinnerModel.setNumberOfGuests(dinnerModel.getNumberOfGuests()+1);});
    sidebarView.minusGuest.click(function() {dinnerModel.setNumberOfGuests(dinnerModel.getNumberOfGuests()-1);});
}

DishDetailsController.setEvents = function(){
    dishDetailsView.confirmDish.click(function(){
        dinnerModel.addDishToMenu(dishDetailsView.selectedDish);
        dishDetailsView.container.hide();
        selectedDishView.container.show();
    });

    dishDetailsView.backSelectDish.click(function(){
        dishDetailsView.container.hide();
        selectedDishView.container.show();
    });
}



