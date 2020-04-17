const Chase = require("./Chase");
const bank = new Chase();

bank.createAccount("Bob Marley", 1000);
bank.credit("Bob Marley", 500);
bank.debit("Bob Marley", 100)

bank.view("Bob Marley");