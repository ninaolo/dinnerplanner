
var DishDetailsController = function(dishDetailsView,selectDishView, dinnerModel) {
    alert("dishes");

    dishDetailsView.confirmDish.click(function(){
        alert("confirm");
        dinnerModel.addDishToMenu(dishDetailsView.selectedDish);
        dishDetailsView.container.hide();
        selectedDishView.container.show();
    });

    dishDetailsView.backSelectDish.click(function(){
        dishDetailsView.container.hide();
        selectedDishView.container.show();
    });

}




