landApp.controller("landFormDetailsNewCtrl", function ($scope, $location, lands,  $routeParams, Land) {

    // If the user is not logged in going back to home screen
    // if (!activeUser.isLoggedIn()) {
    //     $location.path("/");
    //     return;
    // }

    // Creating a copy of the recipe object so changes won't be reflected on the array
    $scope.land = lands.getLandById($routeParams.landIndex);

    

    $scope.cancel = function() {
        $location.path("/land");
    }

    $scope.update = function() {
        lands.update($routeParams.landIndex, $scope.land);
        $location.path("/land");
    }

    $scope.remove = function() {
        lands.remove($routeParams.landIndex);
        $location.path("/land");
    }

    $scope.addLand = function () {
        lands.addLand($scope.land);
        $location.path("/land");
    }
    
    // $scope.addLand = function() {
    //     $scope.lands.push(new Land($scope.land));
    //   }
})
