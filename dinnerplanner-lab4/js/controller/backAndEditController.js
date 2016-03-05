
var BackAndEditController = function(backAndEditView, selectDishView, instructionsView, dinnerView, sidebarView) {

    backAndEditView.backAndEditButton.click(function() {
        backAndEditView.container.hide();
        instructionsView.container.hide();
        dinnerView.container.hide();
        selectDishView.container.show();
        sidebarView.container.show();

    });

}