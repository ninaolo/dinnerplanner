var SelectDishController = function(selectDishView,dishDetailsView, dinnerModel) {

    selectDishView.images.click(function(){
        dishDetailsView.container.show();
        selectDishView.container.hide();
    });
}