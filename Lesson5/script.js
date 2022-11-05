"use strict";

const user = {
    name:'Alex',
    surname:'Smith',
    birthday:'20/04/1993',
    showMyPublicData: function () {
        console.log(`${this.name} ${this.surname}`);
    }
}

// const massive1 = Object.keys(user);
// massive[0] = 'HUI';
// console.log(massive1);

// const massive2 = Object.values(user);
// console.log(massive2);

const massive3 = Object.entries(user);
console.log(massive3)


// Object.defineProperty(user, 'birthday', {value: prompt('date?') ,enumerable: true, configurable: false});


// console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));

// Object.defineProperty(user, 'showMyPublicData', {enumerable: false});

// for (let key in user){
//     console.log(key);
// }

// Object.defineProperties(user, {
//     name:{writable:false},
//     surname:{writable:false}
// })

// Object.defineProperty(user, 'name', {writable: false});


// Object.defineProperty(user, 'gander', {value: 'male'});
// console.log(Object.getOwnPropertyDescriptor(user, 'gander'));


// writable
// enumerable
// configurable