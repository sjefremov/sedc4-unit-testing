QUnit.test( "valid age on empty object", function( assert ) {
    var person = {};
    var age = 17;
    
    var result = setAge(person, age);
    
    assert.ok(result)
    assert.equal(person.age, age);
});

QUnit.test("negative age on empty object", function (assert) {
    var person = {};
    var age = -17;
    
    var result = setAge(person, age);
    
    assert.notOk(result)
    assert.propEqual(person, {});
});

QUnit.test("overflow age on empty object", function (assert) {
    var person = {};
    var age = 117;
    
    var result = setAge(person, age);
    
    assert.notOk(result)
    assert.propEqual(person, {});
});

QUnit.test("zero age on empty object", function (assert) {
    var person = {};
    var age = 0;
    
    var result = setAge(person, age);
    
    assert.ok(result)
    assert.equal(person.age, age);
});

QUnit.test("hundred age on empty object", function (assert) {
    var person = {};
    var age = 100;
    
    var result = setAge(person, age);
    
    assert.notOk(result)
    assert.propEqual(person, {});
});

QUnit.test( "valid age on full object", function( assert ) {
    var person = { age : 23};
    var age = 17;
    
    var result = setAge(person, age);
    
    assert.ok(result)
    assert.equal(person.age, age);
});

QUnit.test("negative age on full object", function (assert) {
    var person = { age : 23};
    var age = -17;
    
    var result = setAge(person, age);
    
    assert.notOk(result)
    assert.equal(person.age, 23);
});

QUnit.test("overflow age on full object", function (assert) {
    var person = { age : 23};
    var age = 117;
    
    var result = setAge(person, age);
    
    assert.notOk(result)
    assert.equal(person.age, 23);
});

QUnit.test("zero age on full object", function (assert) {
    var person = { age : 23};
    var age = 0;
    
    var result = setAge(person, age);
    
    assert.ok(result)
    assert.equal(person.age, age);
});

QUnit.test("hundred age on full object", function (assert) {
    var person = { age : 23};
    var age = 100;
    
    var result = setAge(person, age);
    
    assert.notOk(result)
    assert.equal(person.age, 23);
});

QUnit.test("valid age on null", function (assert) {
    var person = null;
    var age = 100;
    
    var result = setAge(person, age);
    
    assert.notOk(result)
    assert.equal(person, null);
});