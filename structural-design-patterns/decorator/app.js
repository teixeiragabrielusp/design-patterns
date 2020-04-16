const currencyConverter = require("./currencyConverter");

const cost = (qty, price) => Promise.resolve(qty * price);
cost(20, 5).then(result => console.log(result));

//With converter
const costPlus = currencyConverter(cost);
costPlus(20, 5, "INR", "USD").then(result => console.log(result));