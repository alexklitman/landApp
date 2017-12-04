

landApp.factory("lands", function(Land) {
    var lands = [];

    function getAll() {
        return lands;
    }

    function getLandById(index) {
        return lands[index];
    }

    function addLand(land) {
        lands.push(land);
    }

     function update(index, land) {
         lands[index] = land;
    }

    // var update = function(index, recipe) {
    //     recipeArr[index] = recipe;
    // }

    function setLands(landsPlain) {
        lands = [];
        for (var i = 0; i < landsPlain.length; i++) {
            lands.push(new Land(landsPlain[i].buildingtype, landsPlain[i].squaremeter, 
                landsPlain[i].propertynum, landsPlain[i].tabunum,
                landsPlain[i].tabufile, landsPlain[i].streetname,
                landsPlain[i].housenum, landsPlain[i].city,
                landsPlain[i].housefile, landsPlain[i].firstname,
                landsPlain[i].lastname, landsPlain[i].id,
                landsPlain[i].telephone, landsPlain[i].email,
                landsPlain[i].startdate, landsPlain[i].enddate,
                landsPlain[i].rentprice, landsPlain[i].rentfile))
        }
    }

    return {
        getAll: getAll,
        getLandById: getLandById,
        addLand: addLand,
        setLands: setLands,
        update: update
    }
})
