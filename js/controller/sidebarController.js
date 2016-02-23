
var SidebarController = function(sidebarView, dinnerModel, dinnerView, dishDetailsView, backAndEditView) {

    dinnerModel.addObserver(this);

    sidebarView.confirmButton.hide();

    sidebarView.plusGuest.click(function() {
        dinnerModel.setNumberOfGuests(dinnerModel.getNumberOfGuests()+1);
    });

    sidebarView.minusGuest.click(function() {
        dinnerModel.setNumberOfGuests(dinnerModel.getNumberOfGuests()-1);
    });

    sidebarView.confirmButton.click(function() {
        dishDetailsView.container.hide();
        sidebarView.container.hide();
        backAndEditView.container.show();
        dinnerView.container.show();
    });

    this.update = function(obj) {
        var removeButtons = sidebarView.container.find("[id^=remove-]");
        for (var i = 0; i < removeButtons.length; i++) {
            $(removeButtons[i]).click(function() {
                dinnerModel.removeDishFromMenu($(this).attr("id").replace("remove-", ""));
            });
        }
    };

    this.update();
    sidebarView.update();

}