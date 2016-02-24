var SelectDishController = function(selectDishView,dishDetailsView, dinnerModel) {

    selectDishView.images.click(function(){
        dishDetailsView.container.show();
        selectDishView.container.hide();
    });

    selectDishView.searchButton.click(function(){
        selectDishView.showResults();
    });

    selectDishView.dishSelect.change(function () {
        selectDishView.showResults();
    });

}