
var setImageClickEvents = function(selectDishView, dishDetailsView, dinnerModel) {
    var images = selectDishView.container.find(".image-box.dish");
    images.click(function() {
        dishDetailsView.setSelectedDish($(this).attr("id"));
        // AJAX with callback function
        dinnerModel.getDish($(this).attr("id"), dishDetailsView.updateWholeView.bind(dishDetailsView));
        var spinner = new Spinner().spin();
        var spinner2 = new Spinner().spin();
        dishDetailsView.container.find("#dishName").html(spinner.el);
        dishDetailsView.container.find("#quantity").html(spinner2.el);
        dishDetailsView.container.show();
        selectDishView.container.hide();
    });
};

var SelectDishController = function(selectDishView,dishDetailsView, dinnerModel) {

    dinnerModel.addObserver(this);

    selectDishView.searchButton.click(function(){
        dinnerModel.getAllDishes(selectDishView.dishType,selectDishView.keyValues.val()); // sends AJAX
    });

    selectDishView.dishSelect.change(function () {
        selectDishView.dishType = selectDishView.container.find("#dishTypeSelection option:selected").text();
        dinnerModel.getAllDishes(selectDishView.dishType); // sends AJAX
    });

    setImageClickEvents(selectDishView, dishDetailsView);

    this.update = function(eventName, data) {
        if (eventName === "ajax.getAllDishes") {
            setImageClickEvents(selectDishView, dishDetailsView, dinnerModel); // must be done AFTER ajax is done to get all images
        }
    }

};

