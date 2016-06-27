var personService = (function (service) {
    var persons = [
        {
            id : 1,
            name : 'Stojancho',
            lastName : 'Jefremov'
        }
    ];

    var getPersonById = function (id) {

         var result = persons.filter((item) => item.id === id);

         if (result.length) {
             return {
                success : true,
                data : result[0]
             };
         } else {
             return {
                success : false
             };
         }

     }

     return {
        getPersonById : getPersonById
     };

 })(new PersonService());