
var DishDetailsController = function(dishDetailsView,selectDishView, dinnerModel) {

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




