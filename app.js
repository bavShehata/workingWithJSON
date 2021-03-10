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

// var database = {
//   name: 'mongo',
//   type: 'noSQL',
// };

// const writeToFile = async (file) => {
//   try {
//     database = JSON.stringify(database, null, 2);
//     await fs.writeFile(file, database, 'utf8');
//     console.log('Data written successfully');
//   } catch (e) {
//     console.log("couldn't write to file\n", e);
//   }
// };

// writeToFile('./test.json');

// Same idea can be done with sync

// Updating a file uses both read and write together

const updateFile = async (file) => {
  try {
    // Read the file and store data
    var data = await fs.readFile(file, 'utf8');
    // Pare the file into JSON so that we can push a new object/s
    data = JSON.parse(data);
    // The new object
    var database = {
      name: 'mySQL',
      type: 'SQL',
    };
    // pushing the data and stringifying everything for writing
    data.push(database);
    data = JSON.stringify(data, null, 2);
    try {
      // Wrtting to the file
      await fs.writeFile(file, data, 'utf8');
      console.log('Data updated successfully');
      // parsing the data back so that we can console log it as an array of objects
      data = JSON.parse(data);
      data.forEach((db) => {
        console.log(`${db.name} : ${db.type}`);
      });
    } catch (e) {
      console.log("couldn't write to file\n", e);
    }
  } catch (err) {
    console.log("Couldn't read file: \n", err);
  }
};

updateFile('test.json');
