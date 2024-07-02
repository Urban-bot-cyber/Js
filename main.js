/*function sum(a,b,c){
    return a+b+c
}

console.log(sum(2,3,5))*/

/*function curry(fn){
    return function(a){
        return function(b){
            return function(c) {
                return fn(a,b,c)
            }
        }

    }
}*/

//const currySum = curry(sum)
//console.log(currySum(2)(3)(5))

/*function sayMyName(name){
    console.log(`My name is ${name}`) 
}
//sayMyName('Walter White')
*/
/*const person = {
    name:'Urban',
    sayMyName: function(){
        console.log(`My name is ${this.name}`) 
    },
}

//person.sayMyName()

*/
/*
function sayMyName(){
    console.log(`My name is ${this.name}`)
}
//sayMyName.call(person)
function Person(name) {
    this.name = name
}

const p1 = new Person('Urban')
const p2 = new Person('Lara')

globalThis.name = 'Bart'
//console.log(p1.name, p2.name)

sayMyName()*/
/*function Person(fName, lName){
    this.firstName = fName
    this.lastName = lName
}

Person.prototype.getFullName = function() {
    return this.firstName + ' '+ this.lastName
}

function SuperHero(fName, lName){
    Person.call(this, fName, lName)
    this.isSuperHero = true
}

SuperHero.prototype.fightCrime = function() {
    console.log('Fighting crime crime')
}

SuperHero.prototype = Object.create(Person.prototype)

const batman = new SuperHero('Bruce', 'Wayne')
SuperHero.prototype.constructor = SuperHero
console.log(batman.getFullName())
*/

//const person1 = new Person('Bruce', 'Wayne')
//const person2 = new Person('Clark', 'Kent')

//console.log(person1.getFullName())
//console.log(person2.getFullName())


/*class Person{
    constructor(fName, lName){
        this.firstName = fName
        this.lastName = lName
    }

    sayMyName(){
        return this.firstName + ' ' + this.lastName
    }
}

class SuperHero extends Person {
    constructor(fName, lName){
        super(fName, lName)
        this.isSupeHero = true
    }

fightCrime(){
    console.log('Fighting crime')
    }
}

const batman = new Person('Bruce', 'Wayne')
console.log(batman.sayMyName())
*/
const obj = {
    [Symbol.iterator]: function(){
        let step = 0
        const iterator ={
            next: function(){
                step++
                if(step === 1){
                    return {value: 'Hello', done: false}
                } else if (step === 2){
                    return {value: 'world', done: false}
                }
                return {value:undefined, done:true}
            },
        }
        return iterator
    },
}

/*for(const word of obj){
    console.log(word)
}*/

function normalFunction(){
    console.log('Hello')
    console.log('World')
}

//normalFunction()
//normalFunction()

function* generatorFunction(){
    yield 'Hello'
    yield 'World'
}

const generatorObject = generatorFunction()

for(const word of generatorObject){
    console.log(word)
}