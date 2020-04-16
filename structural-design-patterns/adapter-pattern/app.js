const Db = require('./Db');
const { join } = require('path');
//Database file
const dbFile = join('./adapter-pattern/dbs.json');

//LowDB
// const low = require('lowdb');
// const FileSync = require('lowdb/adapters/FileSync');
// const adapter = new FileSync(dbFile);
// const dbs = low(adapter);

//LokiJS
const loki = require("lokijs");
const LokiAdapter = require("./LokiAdapter");
const ldb = new loki(dbFile);
const LokiAdp = new LokiAdapter(ldb);

//DB module instance (LowDB)
// const db = new Db(dbs);

//DB module instance (LokiJS)
const db = new Db(LokiAdp);

db.init("users");
db.add({
    collection: "users",
    data: {
        name: "Marley",
        age: 26,
    }
});

console.log(db.get("users"));