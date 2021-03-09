// // Reading from a JSON file

// // Async reading

const fs = require('fs').promises;

// const readMyFile = async (file) => {
//   try {
//     var data = await fs.readFile(file, 'utf8');
//     data = JSON.parse(data);
//     data.forEach((db) => {
//       console.log(`${db.name} : ${db.type}`);
//     });
//   } catch (err) {
//     console.log("Couldn't read file: \n", err);
//   }
// };

// readMyFile('test.json');

// // OR (This is a sync method and should only be used with almost static databases)

// const databases = require('./test.json');

// // print all databases
// databases.forEach((db) => {
//   console.log(`${db.name}: ${db.type}`);
// });

// // Writing to a JSON file

// Async writing

var database = {
  name: 'mongo',
  type: 'noSQL',
};

const writeToFile = async (file) => {
  try {
    database = JSON.stringify(database, null, 2);
    await fs.writeFile(file, database, 'utf8');
    console.log('Data written successfully');
  } catch (e) {
    console.log("couldn't write to file\n", e);
  }
};

writeToFile('./test.json');

// Same idea can be done with sync
