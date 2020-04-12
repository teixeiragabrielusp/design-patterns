const Phone = require('./Phone');

class IphoneXS {
    constructor(serialNum) {
        return new Phone(serialNum, 'iPhone XS', 'A12', '4Gb', 79.7, 160.9, 9.3, '1100 x 1992');
    }
}

module.exports = IphoneXS;