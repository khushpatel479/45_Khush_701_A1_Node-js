const fs = require('fs');

fs.writeFileSync('example.txt', 'This is a file created using fs module.');
console.log('File created successfully!');

const content = fs.readFileSync('example.txt', 'utf-8');
console.log('File content:', content);

fs.appendFileSync('example.txt', '\nAppended line.');
console.log('Content appended.');

fs.renameSync('example.txt', 'renamed.txt');
console.log('File renamed to renamed.txt');


