
dinnerPlannerApp.controller('OverviewCtrl', function ($scope,Dinner) {

    $scope.menu = Dinner.getFullMenu();

});