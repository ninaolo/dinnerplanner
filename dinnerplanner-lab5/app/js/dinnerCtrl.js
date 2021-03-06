// Dinner controller that we use whenever we have view that needs to 
// display or modify the dinner menu
dinnerPlannerApp.controller('DinnerCtrl', function ($scope,Dinner) {

  $scope.numberOfGuests = Dinner.getNumberOfGuests();

  $scope.setNumberOfGuests = function(number){
    Dinner.setNumberOfGuests(number);
  };

  $scope.getNumberOfGuests = function() {
    return Dinner.getNumberOfGuests();
  };

  // TODO in Lab 5: Implement the methods to get the dinner menu
  // add dish to menu and get total menu price

  $scope.getFullMenu = function() {
    return Dinner.getFullMenu();
  };

  $scope.addDishToMenu = function(id, type) {
    return Dinner.addDishToMenu(id, type);
  };

  $scope.getTotalMenuPrice = function() {
    return Dinner.getTotalMenuPrice();
  };

  $scope.totalMenuPrice = 0;
  $scope.totalMenuPrice = Dinner.getTotalMenuPrice();

  $scope.removeDishFromMenu = function(id){
    Dinner.removeDishFromMenu(id);
  };

  $scope.getTotalDishPrice = function(dish) {
    return Dinner.getTotalDishPrice(dish);
  }

});