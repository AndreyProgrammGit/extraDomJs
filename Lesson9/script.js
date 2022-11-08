"use strict";

// const bigInt = 5312647836147346314536745167345n;

const sameBigInt = BigInt(5312647836147346314536745167345);

console.log();

let bigInt = 1n;
let number = 2;

console.log(bigInt + BigInt(number));

console.log(Number(bigInt) + number)