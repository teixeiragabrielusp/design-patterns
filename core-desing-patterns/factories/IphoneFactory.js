//Abstract factory pattern offer a generic interface to build a family of related objects!!!

const IphoneXR = require('./IphoneXR');
const IphoneXS = require('./IphoneXS');
const IphoneXSMax = require('./IphoneXSMax');

class IphoneFactory {
    create(type, serialNum) {
        switch (type) {
            case 'IphoneXR':
                return new IphoneXR(serialNum);
            case 'IphoneXS':
                return new IphoneXS(serialNum);
            case 'IphoneXSMax':
                return new IphoneXSMax(serialNum);
            default: {
                console.log('Unknown iPhone type!');
            }
        }
    }
}

module.exports = new IphoneFactory();