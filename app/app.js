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
        .when("/land/:landIndex", {
            templateUrl: "app/landForm/landForm.html",
            controller: "landFormDetailsCtrl"
        })
        .when("/statistics", {
            templateUrl: "app/statistics/statistics.html"
          
        })
        .when("/landform", {
            templateUrl: "app/landform/landForm.html"
          
        })
        .when("/lands", {
            templateUrl: "app/land/land.html",

        })
        .when("/userForm", {
            templateUrl: "app/userform/userForm.html"
          
        })
        .otherwise({
            redirectTo: "/"
          });
});
