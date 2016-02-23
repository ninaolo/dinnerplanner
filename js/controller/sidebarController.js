
var SidebarController = function(sidebarView, dinnerModel) {

    sidebarView.confirmButton.hide();

    sidebarView.plusGuest.click(function() {
        dinnerModel.setNumberOfGuests(dinnerModel.getNumberOfGuests()+1);
    });

    sidebarView.minusGuest.click(function() {
        dinnerModel.setNumberOfGuests(dinnerModel.getNumberOfGuests()-1);
    });

    sidebarView.confirmButton.click(function() {
        dinnerView.show(100);
    });

}