landApp.controller("userFormDetailsCtrl", function ($scope, $location, users,  $routeParams, User) {

    // If the user is not logged in going back to home screen
    // if (!activeUser.isLoggedIn()) {
    //     $location.path("/");
    //     return;
    // }

    // Creating a copy of the recipe object so changes won't be reflected on the array
    $scope.user = users.getUserById($routeParams.userIndex);

    

    $scope.cancel = function() {
        $location.path("/user");
    }

    $scope.update = function() {
        users.update($routeParams.userIndex, $scope.user);
        $location.path("/user");
    }

    $scope.remove = function() {
        users.remove($routeParams.userIndex);
        $location.path("/user");
    }

    $scope.addUser = function () {
        users.addUser($scope.user);
        $location.path("/user");
    }
    
    // $scope.addLand = function() {
    //     $scope.lands.push(new Land($scope.land));
    //   }
})
