const axios = require("axios");

const currencyConverter = fn => {
    return async function (qty, price, base, to) {
        const result = await fn(qty, price); //call the original function
        const currencyRate = await axios(`https://free.currconv.com/api/v7/convert?q=${base.toUpperCase()}_${to.toUpperCase()}&compact=y&apiKey=889840a723d8501c139c`);

        return (currencyRate.data[`${base.toUpperCase()}_${to.toUpperCase()}`]["val"] * result);
    }
}

module.exports = currencyConverter;