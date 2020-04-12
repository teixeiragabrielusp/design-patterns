//To solve this it's possible to use the concept of CLASS!!!

const account = require('./cashRegister');
const account1 = require('./cashRegister');

account.credit(25);
account.credit(35);

account1.credit(10);
console.log('Total in account 1 ', account1.total()); //Output = 70

console.log('Total in account' , account.total()); //Output = 70