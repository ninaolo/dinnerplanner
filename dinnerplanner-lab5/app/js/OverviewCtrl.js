
dinnerPlannerApp.controller('OverviewCtrl', function ($scope,Dinner) {

    $scope.menu = Dinner.getFullMenu();

    $scope.totalMenuPrice = 0;
    $scope.totalMenuPrice = Dinner.getTotalMenuPrice();

    $scope.getTotalDishPrice = function(dish) {
        return Dinner.getTotalDishPrice(dish);
    }
});