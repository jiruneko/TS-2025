let hasValue:boolean = true;
let count:number = 10
let float = 3.14
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

let apple: 'apple'
let clothSize: 'small' | 'medium' | 'large' = 'large'
const cloth: {
    color: string,
    size: 'small' | 'medium' | 'large'
} = {
    color: 'white',
    size: 'medium'
}