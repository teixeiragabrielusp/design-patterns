const Topic = require('./Topic');
const User = require('./User');
const Store = require("./Store");

const Bob = new User("Bob Marley");
const Peter = new User("Peter Tosh");

const NodeJS = new Topic("Node.js");
const ReactJS = new Topic("React.js");

NodeJS.subscribe(Bob);
NodeJS.subscribe(Peter);
ReactJS.subscribe(Peter);

NodeJS.add("New version available!");
ReactJS.add("Introduced Hooks!");