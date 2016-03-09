/**
 * Created by Nina on 2016-03-06.
 */

dinnerPlannerApp.controller('InstructionsCtrl', function ($scope,Dinner) {

    $scope.getFullMenu = function() {
        return Dinner.getFullMenu();
    };

});

