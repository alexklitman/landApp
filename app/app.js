var landApp = angular.module("landApp", ["ngRoute"]);

landApp.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "app/login/home.html"
            
        })
        .when("/login", {
            templateUrl: "app/login/login.html"
            
        })
        .when("/user", {
            templateUrl: "app/user/user.html"
          
        })
        .when("/land", {
            templateUrl: "app/land/land.html",
            controller: "landCtrl"
        })
        .when("/landform", {
            templateUrl: "app/landform/landForm.html",
            controller: "landFormDetailsCtrl"
          
        })
        .when("/land/:landIndex", {
            templateUrl: "app/landForm/landForm.html",
            controller: "landFormDetailsCtrl"
        })
        .when("/statistics", {
            templateUrl: "app/statistics/statistics.html"
          
        })
        .when("/userForm", {
            templateUrl: "app/userform/userForm.html"
          
        })
        .otherwise({
            redirectTo: "/"
          });
});
