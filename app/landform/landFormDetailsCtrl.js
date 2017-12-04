landApp.controller("landFormDetailsCtrl", function ($scope, $location, lands,  $routeParams, Land) {

    // If the user is not logged in going back to home screen
    // if (!activeUser.isLoggedIn()) {
    //     $location.path("/");
    //     return;
    // }

    // Creating a copy of the recipe object so changes won't be reflected on the array
    $scope.land = lands.getLandById($routeParams.landIndex);

    

    $scope.cancel = function() {
        $location.path("/landform");
    }

    $scope.update = function() {
        lands.update($routeParams.landIndex, $scope.land);
        $location.path("/landform");
    }

    $scope.remove = function() {
        lands.remove($routeParams.landIndex);
        $location.path("/landforn");
    }
    
})
