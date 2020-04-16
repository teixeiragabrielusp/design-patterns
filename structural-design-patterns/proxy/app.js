const {
    lock,
    unlock
} = require('./vault');

const password = "thisismypass123";

const obj = {
    name: "Marley",
    age: 26,
    city: "Trenchtown",
    country: "Jamaica"
};

const person = lock(obj, password);
person.favColor = "Green";
person.favFruit = "Apple";
console.log(person);

const unlocked = unlock(person, password);
console.log(unlocked);