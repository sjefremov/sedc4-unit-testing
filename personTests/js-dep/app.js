var person = (function () {
    
    var name = '';
    var lastName = '';
    var getFullName = function () {
        return this.name + ' ' + this.lastName;
    };

    return {
        name : name,
        lastName : lastName,
        getFullName : getFullName
    };
})();
 
 var personController = (function (service) {
     
 })(new PersonService());