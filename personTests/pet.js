function Pet(name, age) {
    this.name = name || "";
    this.age = age | 0;
    
    this.isAlive = function () {
        return this.age < 20;
    };
    
    this.isBaby = function () {
        return this.age < 2;
    };
    
    this.haveBirthday = function () {
        this.age += 1;
    }
}