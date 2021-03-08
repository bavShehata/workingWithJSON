const fs = require("fs").promises;

const readMyFile = async (link) =>{
    var data = await fs.readFile(link,'utf8');
    data = JSON.parse(data);
    data.forEach(db => {
        console.log(`${db.name} : ${db.type}`);
    });
}

readMyFile("test.json");


// OR (This is a sync method and should only be used with almost static databases)

const databases = require('./test.json');

// print all databases
databases.forEach(db => {
    console.log(`${db.name}: ${db.type}`);
});