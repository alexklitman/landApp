
landApp.factory("Land", function() {
    
    // Land Constructor
    function Land(buildingtype, squaremeter, propertynum, tabunum, tabufile, streetname, housenum, city,
        housefile, firstname, lastname, id, tlephone, email, startdate, enddate, rentprice, rentfile)
        {
        this.buildingtype = buildingtype;
        this.squaremeter = squaremeter;
        this.propertynum = propertynum;
        this.tabunum = tabunum;

        this.tabufile = tabufile;
        this.streetname = streetname;
        this.housenum = housenum;
        this.city = city;

        this.housefile = housefile;
        this.firstname = firstname;
        this.lastname = lastname;
        this.id = id;

        this.telephone = tlephone;
        this.email = email;
        this.startdate = new Date(startdate);
        this.enddate = new Date(enddate);

        this.rentprice = rentprice;
        this.rentfile = rentfile;        
    }
    
    return Land; 
  })