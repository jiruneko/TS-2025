"use strict";
let hasValue = true;
let count = 12;
let float = 3.05;
let negative = -0.12;
let single = "hello";
let double = 'hello';
let back = `hello`;
let hello;
hello = 2;
hello = 'hello';
hello = true;
const person = {
    name: {
        first: 'Jack',
        last: 'Smith'
    },
    age: 21
};
const fruits = ['Apple', 'banana', 'grape'];
const book = ['business', 1500, false];
var CofferSize;
(function (CofferSize) {
    CofferSize[CofferSize["SHORT"] = 0] = "SHORT";
    CofferSize[CofferSize["TALL"] = 1] = "TALL";
    CofferSize[CofferSize["GRANDE"] = 2] = "GRANDE";
    CofferSize[CofferSize["VENTI"] = 3] = "VENTI";
})(CofferSize || (CofferSize = {}));
const coffer = {
    hot: true,
    size: CofferSize.TALL
};
coffer.size = CofferSize.SHORT;
console.log(CofferSize.SHORT);
let anything = true;
anything = 'hello';
anything = ['hello', 33, true];
anything.dgsfjvo = 'piafsnf';
let banana = 'banana';
banana = anything;
let unionType = 10;
let unionTypes = [21, 'hello'];
const apple = 'apple';
let clothSize = 'large';
const cloth = {
    color: 'white',
    size: 'medium'
};
function add(num1, num2) {
    return num1 + num2;
}
function sayHello() {
    console.log('Hello');
    return;
}
console.log(sayHello());
console.log(sayHello());
let tmp;
const anotherAdd = function (num1, num2) {
    return num1 + num2;
};
const doubleNumber = num => num * 2;
function doubleAndHandle(num, cd) {
    const doubleNum = cd(num * 2);
    console.log(doubleNum);
}
doubleAndHandle(21, doubleNum => {
    return doubleNum;
});
let unknownInput;
let anyInput;
let text;
unknownInput = 'hello';
unknownInput = 21;
unknownInput = true;
text = anyInput;
if (typeof unknownInput === 'string') {
    text = unknownInput;
}
function error(message) {
    throw new Error(message);
}
console.log(error('Thin is an error'));
