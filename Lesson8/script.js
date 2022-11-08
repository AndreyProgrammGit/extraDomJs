"use strict";

const arr = ['Alex','Ana','Oleg','Alex'];

const set = new Set(arr);

function unique (arr) {
    return Array.from(new Set(arr));
}

console.log(unique(arr));

// set.add('Ivan')
//     .add('Oleg');

// console.log(set);

// const arr2 = ['Olex','Anna','Nikita'];
// for (let name of arr2){
//     set.add(name);
// }

// set.delete(value)
// set.has(value)
// set.clear()
// set.size

// for (let value of set){
//     console.log(value);
// }

// set.forEach((value, valueAgaing, set) => {
//     console.log(value, valueAgaing);
// })

// console.log(set.values());
// set.keys();
// set.entries()