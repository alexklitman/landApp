

landApp.factory("users", function(User) {
    var users = [];

    function getAll() {
        return users;
    }

    function getUserById(index) {
        return users[index];
    }

    function addUser(user) {
        users.push(user);
    }

     function update(index, user) {
         users[index] = user;
    }

    function remove(index) {
        users.splice(index, 1);
    }


    function removeAll() {
        users = [];
    }


    function setUsers(usersPlain) {
        users = [];
        for (var i = 0; i < usersPlain.length; i++) {
            users.push(new User(usersPlain[i].usertype, usersPlain[i].workerid,
                usersPlain[i].firstname,usersPlain[i].lastname, usersPlain[i].id,
                usersPlain[i].telephone, usersPlain[i].email,usersPlain[i].streetname,
                usersPlain[i].housenumber,usersPlain[i].city))
        }
    }

    return {
        getAll: getAll,
        getUserById: getUserById,
        addUser: addUser,
        //setLands: setLands,
        update: update,
        remove: remove,
        removeAll: removeAll

    }
})
