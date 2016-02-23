
var SidebarController = function(sidebarView, dinnerModel) {
    sidebarView.plusGuest.click(function() {dinnerModel.setNumberOfGuests(dinnerModel.getNumberOfGuests()+1);});
    sidebarView.minusGuest.click(function() {dinnerModel.setNumberOfGuests(dinnerModel.getNumberOfGuests()-1);});

}

