var personService = (function () {
    var persons = [
        {
            id : 1,
            name : 'Stojancho',
            lastName : 'Jefremov'
        },
        {
            id : 4
        }
    ];

    var getPersonById = function (id) {

         var result = persons.filter(function (item) {
             return item.id === id;
         });

         if (result.length) {
             alert("Getting person by id success");   
             return {
                success : true,
                data : result[0]
             };
         } else {
             alert("Getting person by id failure");   
             return {
                success : false
             };
         }

     }

     return {
        getPersonById : getPersonById
     };

 })();