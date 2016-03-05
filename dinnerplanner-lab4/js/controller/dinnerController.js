

var DinnerController = function(dinnerView, dinnerModel, instructionsView) {

    dinnerView.printRecipe.click(function() {
        dinnerView.container.hide();
        instructionsView.container.show();
    });

}