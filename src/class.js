"use strict";
class Person {
    constructor(initName, initAge) {
        this.name = initName;
        this.age = initAge;
    }
    incrementAge() {
        this.age += 1;
    }
    greeting() {
        console.log(`Hello My name is ${this.name}`);
        console.log(`Hello My age is ${this.age}`);
    }
}
let person2;
const quill = new Person('Quill', 38);
quill.incrementAge();
quill.greeting();
