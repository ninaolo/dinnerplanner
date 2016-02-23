var HomeController = function(homeView, sidebarView, selectDishView) {

    homeView.newDinner.click(function(){
        homeView.container.hide();
        sidebarView.container.show();
        selectDishView.container.show();
    });
}