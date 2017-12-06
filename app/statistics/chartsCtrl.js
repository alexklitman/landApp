landApp.controller("chartsCtrl", function ($scope, lands, $log) {
    $scope.myChartObject = {};

    $scope.myChartObject.type = "PieChart";

    lands.getAll().then(function mySuccess(data) {
        var typeLandsBiulding = 0;
        var typeLandsApartment = 0;
        var typeLandsPlot = 0;
        for (var i = 0; i < data.length; i++) {
            var currentLand = lands.getLandById(i);
            if (currentLand.buildingtype === "מבנה") {
                typeLandsBiulding++;
            }
            if (currentLand.buildingtype === "דירה") {
                
            }
             else {
                typeLandsPlot++;
            }
        }

        $scope.myChartObject.data = {
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
    }, function myError(responseError) {
        alert(JSON.stringify(responseError));
    });


    //Pie Chart Title
    $scope.myChartObject.options = {
        'title': 'התפלגות נכסים'
    };
});