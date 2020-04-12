//Factoring...
const IphoneFactory= require('./IphoneFactory');

const IphoneXR = IphoneFactory.create('IphoneXR', 'IPX-0001');
const IphoneXS = IphoneFactory.create('IphoneXS', 'IPX-0002');
const IphoneXSMax = IphoneFactory.create('IphoneXSMax', 'IPX-0003');

IphoneXR.displayConfig();
IphoneXS.displayConfig();
IphoneXSMax.displayConfig();

//-----------------------------------------------------
// const IphoneXR = require('./IphoneXR');
// const IphoneXS = require('./IphoneXS');
// const IphoneXSMax = require('./IphoneXSMax');

// const myNewIphoneXR = new IphoneXR('IPX-0001');
// const myNewIphoneXS = new IphoneXS('IPX-0002');
// const myNewIphoneXSMax = new IphoneXSMax('IPX-0003');

// myNewIphoneXR.displayConfig();
// myNewIphoneXR.dial(981547895);

// myNewIphoneXS.displayConfig();
// myNewIphoneXS.dial(881547895);

// myNewIphoneXSMax.displayConfig();
// myNewIphoneXSMax.dial(781547895);