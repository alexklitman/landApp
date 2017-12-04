
landApp.controller("landCtrl", function($scope, lands, $log, $http, $location) {
    //$scope.test = "ewewew";

    // http call to get data from json
    $bol = false; 
    if ($bol == false) {
      $bol = true; 
      $http.get("app/model/data/lands.json").then(function mySuccess(response) {
        // Updating the service with the data
        lands.setLands(response.data);

        // Getting the data from the service
        $scope.lands = lands.getAll();
      }, function myError(response) {
        alert("error" + JSON.stringify(response.status));
    });
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
      
      $scope.openLand = function (land) {
        // Getting the index of the land in the array
        var landIndex = $scope.lands.indexOf(land);

        // Updating the URL
        $location.path("/land/" + landIndex)
      }
  
      $scope.openDetails = function() {
        $location.path("/land/" + $scope.selectedProp)
    }
   
})