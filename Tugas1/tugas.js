// 1. Variabel menggunakan let dan const:

let mutableVariable = 'I can change';
const immutableVariable = 'I cannot change';
//2.  Arrow function yang menerima parameter dan mengembalikan nilai:

const sum = (a, b) => a + b;
// 3. Template literals untuk menggabungkan string dan variabel:

const nama = 'John';
const umur = 30;
const greeting = `Hello, my nama is ${name} and I am ${umur} years old.`;
//4. Destructuring pada array dan objek:

// Array Destructuring
const numbers = [1, 2, 3];
const [first, second, third] = numbers;

// Object Destructuring
const person = { name: 'Alice', age: 25, city: 'Wonderland' };
const { name, age, city } = person;
// 5. Spread operator untuk menggabungkan dua array dan dua objek:

// Arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];

// Objects
const object1 = { a: 1, b: 2 };
const object2 = { c: 3, d: 4 };
const combinedObject = { ...object1, ...object2 };
//6. Modul dengan export dan import fungsi di file lain:

File: math.js

export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
File: main.js

import { add, subtract } from './math.js';

console.log(add(5, 3)); // 8
console.log(subtract(5, 3)); // 2
//7. Promises dan async / await:

Promises

const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data fetched');
        }, 2000);
    });
};

fetchData().then(data => console.log(data)).catch(error => console.error(error));
Async / Await

const fetchDataAsync = async () => {
    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
};

fetchDataAsync();
//8. Class sederhana dengan inheritance:

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog('Rex');
dog.speak(); // Rex barks.