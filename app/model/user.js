
landApp.factory("User", function() {
    
    // User Constructor
    function Land(usertype, workerid, firstname, lastname, id, telephone, email, streetname,
        housenumber, city)
        {
        this.usertype = usertype;
        this.workerid = workerid;
        this.firstname = firstname;

        this.lastname = lastname;
        this.id = id;
        this.telephone = telephone;
        this.email = email;

        this.streetname = streetname;
        this.housenumber = housenumber;
        this.city = city;
    }
    
    return User; 
  })