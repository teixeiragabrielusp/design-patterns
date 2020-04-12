const Phone = require('./Phone');

class IphoneXSMax {
    constructor(serialNum) {
        return new Phone(serialNum, 'iPhone XS Max', 'A12', '4.5Gb', 85.7, 180.9, 10.3, '1200 x 2400');
    }
}

module.exports = IphoneXSMax;