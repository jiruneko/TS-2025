let hasValue:boolean = true;
let count:number = 12
let float = 3.05
let negative = -0.12
let single = "hello"
let double = 'hello'
let back = `hello`
let hello
hello = 2
hello = 'hello'
hello = true

const person = {
    name: {
    first: 'Jack',
    last: 'Smith'
},
    age: 21
}
const fruits: any[] = ['Apple', 'banana', 'grape']

const book: [string, number, boolean
] = ['business', 1500, false]

enum CofferSize {
    SHORT,
    TALL,
    GRANDE,
    VENTI
}

const coffer = {
    hot: true,
    size: CofferSize.TALL
}
coffer.size = CofferSize.SHORT
console.log(CofferSize.SHORT);

let anything: any = true
anything = 'hello'
anything = ['hello', 33, true]
anything.dgsfjvo = 'piafsnf'
let banana = 'banana'
banana = anything

let unionType: number | string = 10
let unionTypes: (number | string)[] = [21, 'hello']

type ClothSize = 'small' | 'medium' | 'large'
const apple = 'apple'
let clothSize: ClothSize = 'large'
const cloth: {
    color: string,
    size: 'small' | 'medium' | 'large'
} = {
    color: 'white',
    size: 'medium'
}

function add(num1: number, num2: number) {
    return num1 + num2
}

function sayHello(): void {
    console.log('Hello');
    return
}
console.log(sayHello());

console.log(sayHello());
let tmp: undefined

const anotherAdd: (n1: number, n2: number) => number = function (num1: number, num2: number): number {
    return num1 + num2
}
const doubleNumber: (num: number) => number = num => num * 2

function doubleAndHandle(num: number, cd: (num: number) => void): void {
    const doubleNum = cd(num * 2)
    console.log(doubleNum)
}
doubleAndHandle(21, doubleNum => {
    return doubleNum
})

let unknownInput: unknown
let anyInput: any
let text: string
unknownInput = 'hello'
unknownInput = 21
unknownInput = true
text = anyInput
if (typeof unknownInput === 'string') {
    text = unknownInput
}

function error(message: string): never {
    throw new Error(message)
}
console.log(error('Thin is an error'));
