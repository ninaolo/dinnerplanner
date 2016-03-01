
var DishDetailsController = function(dishDetailsView,selectDishView, dinnerModel) {

    dishDetailsView.confirmDish.click(function(){
        dinnerModel.addDishToMenu(dishDetailsView.selectedDish.RecipeID,selectDishView.dishType);
        dishDetailsView.container.hide();
        selectDishView.container.show();
    });

    dishDetailsView.backSelectDish.click(function(){
        dishDetailsView.container.hide();
        selectDishView.container.show();
    });

}




