
var setImageClickEvents = function(selectDishView, dishDetailsView) {
    var images = selectDishView.container.find(".image-box.dish");
    images.click(function() {
        dishDetailsView.setSelectedDish($(this).attr("id"));
        dishDetailsView.update();
        dishDetailsView.container.show();
        selectDishView.container.hide();
    });
}

var SelectDishController = function(selectDishView,dishDetailsView, dinnerModel) {

    selectDishView.searchButton.click(function(){
        dinnerModel.getAllDishes(selectDishView.dishSelect.text(),selectDishView.keyValues.val()); // sends AJAX
        setImageClickEvents(selectDishView, dishDetailsView);
    });

    selectDishView.dishSelect.change(function () {
        dinnerModel.getAllDishes(selectDishView.dishType); // sends AJAX
        setImageClickEvents(selectDishView, dishDetailsView);
    });

    setImageClickEvents(selectDishView, dishDetailsView);

};

