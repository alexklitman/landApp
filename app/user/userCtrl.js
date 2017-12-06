
landApp.controller("userCtrl", function($scope, users, $log, $http, $location) {

    //if the length of array lands is 0 meening never was loaded
    if (users.getAll().length === 0) {
      // http call to get data from jso
      $http.get("app/user/data/userlist.json").then(function mySuccess(response) {
          // Updating the service with the data
          users.setUsers(response.data);

          // Getting the data from the service
          $scope.users = users.getAll();
        }, function myError(response) {
          alert("error" + JSON.stringify(response.status));
      });
    } else {
      $scope.users = users.getAll();
    }

    // $scope.addLand = function() {
    //     cars.addLand(new Land("Susita", "Carmel", "1972", 12022939));
    //     $scope.lands = lands.getAll();
    // }
      
      // $scope.sortBy = function(prop) {
      //   $scope.orderProp = prop;
      // }
      
      
      // Custom filter function
      // $scope.filterBrandAndModel = function(land) {
      //   if ($scope.query == undefined || $scope.query === "") {
      //     return true;
      //   } 
        
      //   var queryLowerCase = $scope.query.toLowerCase();
      //   var firstname = land.firstname.toLowerCase();
      //   var lastname = land.lastname.toLowerCase();
        
      //   if (firstname.includes(queryLowerCase) || 
      //   lastname.includes(queryLowerCase)) {
      //     return true;
      //   } else {
      //     return false;
      //   }
      // }
      
      $scope.openUser = function (user) {
        // Getting the index of the land in the array
        var userIndex = $scope.users.indexOf(user);

        // Updating the URL
        $location.path("/user/" + userIndex)
      }
  
    $scope.openDetails = function(index) {
      $location.path("/user/" + index)
  }

  //   $scope.openDetails = function() {
  //     $location.path("/user/" + $scope.selectedProp)
  // }
 
   
})