landApp.controller("chartsCtrl", function ($scope, lands, $log, $http) {
    $scope.myChartObject = {};

    $scope.myChartObject.type = "PieChart";

    //if the length of array lands is 0 meening never was loaded
    if (lands.getAll().length === 0) {
        // http call to get data from jso
        $http.get("app/model/data/lands.json").then(function mySuccess(response) {
            // Updating the service with the data
            lands.setLands(response.data);

            // Getting the data from the service
            $scope.lands = lands.getAll();
            loadChartData();
        }, function myError(response) {
            alert("error" + JSON.stringify(response.status));
        });
    } else {
        $scope.lands = lands.getAll();
        loadChartData();
    }

    function loadChartData() {
        var typeLandsBiulding = 0;
        var typeLandsApartment = 0;
        var typeLandsPlot = 0;
        for (var i = 0; i < $scope.lands.length; i++) {
            var currentLand = lands.getLandById(i);
            if (currentLand.buildingtype === "מבנה") {
                typeLandsBiulding++;
            }
            if (currentLand.buildingtype === "דירה") {
                typeLandsApartment++;
            }
             else {
                typeLandsPlot++;
            }
        }

        $scope.myChartObject.lands = {
            "cols": [
                { id: "t", label: "New or Old", type: "string" },
                { id: "s", label: "Number of Cars", type: "number" }
            ], "rows": [
                {
                    c: [
                        { v: "מבנים" },
                        { v: typeLandsBiulding },
                    ]
                },
                {
                    c: [
                        { v: "דירות" },
                        { v: typeLandsApartment },
                    ]
                },
                {
                    c: [
                        { v: "מגרשים" },
                        { v: typeLandsPlot },
                    ]
                }
            ]
        };    

    }

    //Pie Chart Title
    $scope.myChartObject.options = {
        'title': 'התפלגות נכסים'
    };



});