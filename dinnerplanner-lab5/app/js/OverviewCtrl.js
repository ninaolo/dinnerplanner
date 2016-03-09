
dinnerPlannerApp.controller('OverviewCtrl', function ($scope,Dinner) {

    $scope.getFullMenu = function() {
        return Dinner.getFullMenu();
    };

    $scope.getTotalMenuPrice = function() {
        return Dinner.getTotalMenuPrice();
    };

    $scope.getTotalDishPrice = function(dish) {
        return Dinner.getTotalDishPrice(dish);
    }
});