"use strict";

const obj = {
    name: 'Test',
    [Symbol("id")]: 1,
    getId: function(){
        return this[id];
    }
}

console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);

// let id = Symbol("id");
// let id2 = Symbol("id");

// console.log(id == id2);

// obj[id] = 1;

// console.log(obj[id]);

// for (let value in obj) console.log(value);

const myAwesomeDB = {
    movies: [],
    actors: [],
    [Symbol.for("id")]: 123
}

// Сторонний код библиотеки 

myAwesomeDB.id = '134345345';


console.log(myAwesomeDB[Symbol.for('id')])
console.log(myAwesomeDB)