const Phone = require('./Phone');

class IphoneXR {
    constructor(serialNum) {
        return new Phone(serialNum, 'iPhone XR', 'A12', '3Gb', 75.7, 150.9, 8.3, '928 x 1792');
    }
}

module.exports = IphoneXR;