describe('tests for controller', function () {
    
    it('person controller manages successful return from service', function () {
        //arrange
        //var personId = 1;
        spyOn(personService, 'getPersonById').and.returnValue({
            success : true,
            data : 'Stojancho was here'
        });

        //act
        personController.getPerson();

        //assert
        expect(personController.data.currentPerson).toBe('Stojancho was here');
        expect(personController.data.errorState).toBeFalsy();

    });

    it('person controller manages failed return from service', function () {
        //arrange
        //var personId = 2;

        spyOn(personService, 'getPersonById').and.returnValue({
            success : false,
            data : 'should not see me'
        });

        //act
        personController.getPerson();

        //assert
        expect(personController.data.currentPerson).toBe(null);
        expect(personController.data.errorState).toBeTruthy();

    });

    it('test that integer one does not equal to string one', function () {
        //arrange

        //act
        var result = 1 ==='1';

        //assert
        expect(result).toBeFalsy();

    });
    
    it('test that integer one is equal to string one', function () {
        //arrange

        //act
        var result = 1 =='1';

        //assert
        expect(result).toBeTruthy();

    });

});

describe('tests for service', function () {
    
    

});