"use strict";
var Person = /** @class */ (function () {
    function Person(personOption) {
        this.name = personOption.name;
        this.identityId = personOption.identityId;
        this.age = personOption.age;
        this.sex = personOption.sex;
        this.character = personOption.character;
        this.mood = personOption.mood;
        this.balance = personOption.balance;
    }
    return Person;
}());
var person = new Person({
    name: '小杨',
    identityId: 140624199704290030,
    age: 24,
    sex: 1,
});
console.log(person);
