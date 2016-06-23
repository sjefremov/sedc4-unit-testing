function setAge(person, age) {
    
    if (!person || age < 0 || age > 99) {
        return false;
    }
    
    person.age = age;
    return true;
}