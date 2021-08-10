"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
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
exports.Person = Person;
