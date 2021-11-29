// what is difference between sync and async?
// sync is blocking, async is non-blocking
// sync is sequential, async is parallel
// sync is single-threaded, async is multi-threaded

// console.log('start');
// setTimeout(() => {
//   console.log('Next');
// }, 5000);

// console.log('end');

import fs from 'fs';

// >> synchronously

// >>>>>to create and add data in file synchronously

// fs.writeFileSync('notes.txt', 'This is my first file');
// fs.writeFileSync('notes.txt', 'This is my first file, I have to updated it');

// >>>>>to read data from file synchronously
// const data = fs.readFileSync('notes.txt', 'utf-8');
// console.log(data);
// console.log(data.toString()); // toString() is used to convert buffer to string

// Append some data in notes.txt
// fs.appendFileSync('notes.txt', ' Welcome to the Coding World ');

// rename a file;
// fs.renameSync('notes.txt', 'notesUpdate.txt');

// >> Asynchronously

// fs.writeFile('demo.txt', "Let's Welcome our Juniors", (err) => {
//   console.log('File is created');
//   console.log(err);
// });

// append data asynchronously
// fs.appendFile('demo.txt', 'This university is a great place', (err) => {
//   console.log('Updated');
// });

// read file asynchronously

// fs.readFile('demo.txt', 'utf-8', (err, data) => {
//   console.log(data);
// });

// fs.rename('demo.txt', 'demoUpdated.txt', (err) => {
//   console.log('File is renamed');
//   console.log(err);
// });
