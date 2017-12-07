var landApp = angular.module("landApp", ["ngRoute", "googlechart"]);

landApp.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "app/login/home.html"
            
        })
        .when("/login", {
            templateUrl: "app/login/login.html"
            
        })
        .when("/user", {
            templateUrl: "app/user/user.html",
            controller: "userCtrl"
          
        })
        .when("/user/:userIndex", {
            templateUrl: "app/userForm/userForm.html",
            controller: "userFormDetailsCtrl"
        })
        .when("/userformnew", {
            templateUrl: "app/userformnew/userFormNew.html",
            controller: "userFormDetailsNewCtrl"
          
        })
        .when("/land", {
            templateUrl: "app/land/land.html",
            controller: "landCtrl"
        })
        .when("/land/:landIndex", {
            templateUrl: "app/landForm/landForm.html",
            controller: "landFormDetailsCtrl"
        })
        .when("/landformnew", {
            templateUrl: "app/landformnew/landFormNew.html",
            controller: "landFormDetailsNewCtrl"
          
        })
        .when("/landform", {
            templateUrl: "app/landform/landForm.html",
            controller: "landFormDetailsCtrl"
          
        })
        // .when("/statistics", {
        //     templateUrl: "app/statistics/statistics.html"
          
        // })
        .when("/userForm", {
            templateUrl: "app/userform/userForm.html"
          
        })
        .when("/statistics", {
            templateUrl: "app/statistics/statistics.html",
            controller: "chartsCtrl"
        })    

        .otherwise({
            redirectTo: "/"
          });
});
