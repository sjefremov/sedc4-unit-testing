/// <reference path="period.js" />

QUnit.test('Undefined parameters error', function (assert) {
    assert.throws(function () {

        var period = new Period();
        period = new Period(new Date());
        period = new Period(undefined, new Date());
        
    }, new Error('Undefined parameters'), 
        'raised Undefined parameters error');
});