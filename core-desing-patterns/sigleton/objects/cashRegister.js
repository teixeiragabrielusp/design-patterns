let cash = 0;

const cashRegister = {
    credit(amount) {
        cash = cash + amount;
        return cash;
    },

    debit(amount) {
        if(amount <= cash) {
            cash = cash - amount;
            return true;
        } else {
            return false;
        }

    },

    total() {
        return cash;
    }
}

module.exports = cashRegister;