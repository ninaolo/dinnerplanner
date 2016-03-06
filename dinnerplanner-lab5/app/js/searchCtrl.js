// Search controller that we use whenever we have a search inputs
// and search results
dinnerPlannerApp.controller('SearchCtrl', function ($scope,Dinner) {

  // TODO in Lab 5: you will need to implement a method that searchers for dishes
  // including the case while the search is still running.

    $scope.types = Dinner.getDishTypes();

    $scope.search = function(query, dishType) {
        $scope.status = "Searching...";
        var titleSearch = (query == undefined ? "" : query) + " " + (dishType == undefined ? "" : dishType);
        console.log(titleSearch);
        Dinner.DishSearch.get({title_kw:titleSearch}, function(data){
            $scope.dishes=data.Results;
            $scope.status = "Showing " + data.Results.length + " results.";
        },function(data){
            $scope.status = "There was an error";
        });
    }


});