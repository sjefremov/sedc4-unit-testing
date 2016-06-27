var personController = (function (service) {
    var currentPerson = null; 
    var errorState = false;

    var getPerson = function (id) {

         var result = personService.getPersonById(id);

         if (result.success) {
             currentPerson = result.data;
         } else {
             currentPerson = null;
         }

         errorState = !result.success;
     }

     return {
        getPerson : getPerson,
        currentPerson : currentPerson,
        errorState : errorState
     };

 })(new PersonService());