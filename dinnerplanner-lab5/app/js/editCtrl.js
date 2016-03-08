/**
 * Created by liwir_000 on 2016-03-08.
 */

dinnerPlannerApp.controller('editCtrl', function ($scope,Dinner) {

    $scope.numberOfGuests = Dinner.getNumberOfGuests();

});