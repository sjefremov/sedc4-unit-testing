var personController = (function (service) {
    
    var data = {
        currentPerson : null, 
        errorState : false
    };

    var getPerson = function (id) {

         var result = personService.getPersonById(id);

         if (result.success) {
             data.currentPerson = result.data;
         } else {
             data.currentPerson = null;
         }

         data.errorState = !result.success;
     }

     return {
        getPerson : getPerson,
        data : data
     };

 })();