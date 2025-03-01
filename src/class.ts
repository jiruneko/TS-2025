class Person {

    name: string;
    private age: number;

    constructor(initName: string, initAge: number) {
        this.name = initName;
        this.age = initAge;
    }

    incrementAge() {
        this.age += 1
    }

    greeting(this: Person) {
        console.log(`Hello My name is ${this.name}`);
        console.log(`Hello My age is ${this.age}`);
        
    }
}
let person2: Person
const quill = new Person('Quill', 38);
quill.incrementAge()
quill.greeting();