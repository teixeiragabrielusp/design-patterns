const Payment = require("./Payment");
const Chase = require("./Chase");
const Citibank = require("./Citibank");

const payment = new Payment();

payment.pay(new Chase(200, "AAAAEEEE00052"));
payment.pay(new Citibank(300, "CCCCCEEEE00052"));

payment.refund(new Chase(50, "AAAAEEEE00052"));
payment.refund(new Citibank(100, "CCCCCEEEE00052"));

