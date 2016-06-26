/// <reference path="period.js" />

QUnit.test('No parameters error on Period function', function (assert) {
    assert.throws(function () {

        var period = new Period();
        
    }, new Error('Undefined parameters'), 
        'raised Undefined parameters error on Period function');
});

QUnit.test('Undefined second parameter error on Period function', function (assert) {
    assert.throws(function () {

        var period = new Period(new Date());
        
    }, new Error('Undefined parameters'), 
        'raised Undefined parameters error on Period function');
});

QUnit.test('Undefined first parameter error on Period function', function (assert) {
    assert.throws(function () {

        var period = new Period(undefined, new Date());
        
    }, new Error('Undefined parameters'), 
        'raised Undefined parameters error on Period function');
});

QUnit.test('Null parameters error on Period function', function (assert) {
    assert.throws(function () {

        var period = new Period(null, null);
        
    }, new Error('Null parameters'), 
        'raised Null parameters error on Period function');
});

QUnit.test('Null first parameter error on Period function', function (assert) {
    assert.throws(function () {

        var period = new Period(null, new Date());
        
    }, new Error('Null parameters'), 
        'raised Null parameters error on Period function');
});

QUnit.test('Null second parameter error on Period function', function (assert) {
    assert.throws(function () {

        var period = new Period(new Date(), null);
        
    }, new Error('Null parameters'), 
        'raised Null parameters error on Period function');
});

QUnit.test('Valid parameters on Period function', function (assert) {
    var startDate = new Date(2016, 5, 1, 1, 50, 50);
    var endDate = new Date(2016, 5, 1, 1, 50, 59);
    var period = new Period(startDate, endDate);

    assert.equal(period.startDate, startDate, 'Start date set');
    assert.equal(period.endDate, endDate, 'End date set');
});

QUnit.test('Invalid first parameter (not date) error on Period function', function (assert) {
    
    assert.throws(function () {
        var startDate = 'asd';
        var endDate = new Date(2016, 5, 1, 1, 50, 59);
        var period = new Period(startDate, endDate);
    }, new Error('Invalid parameters'),
    'Raised Invalid parameters error');
    
});

QUnit.test('Invalid second parameter (not date) error on Period function', function (assert) {
    
    assert.throws(function () {
        var startDate = new Date(2016, 5, 1, 1, 50, 59);
        var endDate = 'new Date(2016, 5, 1, 1, 50, 59)';
        var period = new Period(startDate, endDate);
    }, new Error('Invalid parameters'),
    'Raised Invalid parameters error');
    
});

QUnit.test('Start date greater than end date (not date) error on Period function', function (assert) {
    
    assert.throws(function () {
        var startDate = new Date(2016, 5, 1, 1, 50, 59);
        var endDate = new Date(2016, 5, 1, 1, 50, 50);
        var period = new Period(startDate, endDate);
    }, new Error('Start date greater than end date'),
    'Raised Start date greater than end date error');
    
});

QUnit.test('Valid one year difference on getPeriod()', function (assert) {
    var startDate = new Date(2016, 5, 1, 1, 50, 59);
    var endDate = new Date(2017, 5, 2, 1, 59, 59);
    var period = new Period(startDate, endDate);

    var result = period.getPeriod();

    assert.equal(result, '1 year');   
});

QUnit.test('Valid many years difference on getPeriod()', function (assert) {
    var startDate = new Date(2016, 5, 1, 1, 50, 59);
    var endDate = new Date(2019, 5, 1, 1, 50, 59);
    var period = new Period(startDate, endDate);

    var result = period.getPeriod();

    assert.equal(result, '3 years');   
});

QUnit.test('Valid months difference on getPeriod()', function (assert) {
    var startDate = new Date(2016, 5, 1, 1, 50, 59);
    var endDate = new Date(2017, 3, 1, 1, 50, 59);
    var period = new Period(startDate, endDate);

    var result = period.getPeriod();

    assert.equal(result, '9 months');   
});

QUnit.test('Valid one month difference on getPeriod()', function (assert) {
    var startDate = new Date(2017, 2, 1, 1, 50, 59);
    var endDate = new Date(2017, 3, 2, 1, 50, 59);
    var period = new Period(startDate, endDate);

    var result = period.getPeriod();

    assert.equal(result, '1 month');   
});

QUnit.test('Valid days difference on Fev-Mar example getPeriod()', function (assert) {
    var startDate = new Date(2016, 1, 1, 1, 50, 59);
    var endDate = new Date(2016, 2, 1, 1, 50, 59);
    var period = new Period(startDate, endDate);

    var result = period.getPeriod();

    assert.equal(result, '29 days');   
});

QUnit.test('Valid 30 days difference from one month example getPeriod()', function (assert) {
    var startDate = new Date(2016, 2, 1, 1, 50, 59);
    var endDate = new Date(2016, 2, 31, 2, 50, 59);
    var period = new Period(startDate, endDate);

    var result = period.getPeriod();

    assert.equal(result, '30 days');   
});

QUnit.test('Valid 1 day difference from getPeriod()', function (assert) {
    var startDate = new Date(2016, 2, 30, 1, 50, 59);
    var endDate = new Date(2016, 2, 31, 2, 51, 59);
    var period = new Period(startDate, endDate);

    var result = period.getPeriod();

    assert.equal(result, '1 day');   
});

QUnit.test('Valid 1 hour difference from getPeriod()', function (assert) {
    var startDate = new Date(2016, 2, 31, 1, 50, 59);
    var endDate = new Date(2016, 2, 31, 2, 51, 59);
    var period = new Period(startDate, endDate);

    var result = period.getPeriod();

    assert.equal(result, '1 hour');   
});

QUnit.test('Valid many hours difference from getPeriod()', function (assert) {
    var startDate = new Date(2016, 2, 31, 1, 50, 59);
    var endDate = new Date(2016, 2, 31, 5, 51, 59);
    var period = new Period(startDate, endDate);

    var result = period.getPeriod();

    assert.equal(result, '4 hours');   
});

QUnit.test('Valid 1 min difference from getPeriod()', function (assert) {
    var startDate = new Date(2016, 2, 31, 1, 50, 58);
    var endDate = new Date(2016, 2, 31, 1, 51, 59);
    var period = new Period(startDate, endDate);

    var result = period.getPeriod();

    assert.equal(result, '1 min');   
});


QUnit.test('Valid many minutes difference from getPeriod()', function (assert) {
    var startDate = new Date(2016, 2, 31, 1, 59, 59);
    var endDate = new Date(2016, 2, 31, 2, 57, 59);
    var period = new Period(startDate, endDate);

    var result = period.getPeriod();

    assert.equal(result, '58 mins');   
});

QUnit.test('Valid many seconds difference from getPeriod()', function (assert) {
    var startDate = new Date(2016, 2, 31, 1, 57, 59);
    var endDate = new Date(2016, 2, 31, 1, 58, 3);
    var period = new Period(startDate, endDate);

    var result = period.getPeriod();

    assert.equal(result, '4 seconds');   
});

QUnit.test('Valid one second difference from getPeriod()', function (assert) {
    var startDate = new Date(2016, 2, 31, 1, 57, 58);
    var endDate = new Date(2016, 2, 31, 1, 57, 59);
    var period = new Period(startDate, endDate);

    var result = period.getPeriod();

    assert.equal(result, '1 second');   
});