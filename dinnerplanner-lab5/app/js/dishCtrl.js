// Dinner controller that we use whenever we want to display detailed
// information for one dish
dinnerPlannerApp.controller('DishCtrl', function ($scope,$routeParams,Dinner) {
  
  // TODO in Lab 5: you need to get the dish according to the routing parameter
  // $routingParams.paramName
  // Check the app.js to figure out what is the paramName in this case
  $scope.dish = Dinner.Dish.get({id: $routeParams.dishId});

  $scope.getNumberOfGuests = function() {
    return Dinner.getNumberOfGuests();
  };


  $scope.totalDishPrice = 0;
  Dinner.Dish.get({id: $routeParams.dishId}, function success(dish) {
    var total = 0;
      for(var i = 0; i < dish.Ingredients.length; i++) {
        total += Dinner.getNumberOfGuests() * dish.Ingredients[i].Quantity;
      }
    $scope.totalDishPrice = total;
  });

  $scope.addDishToMenu = function() {
    Dinner.addDishToMenu($scope.dish);
  };

});