const fs = require('fs');
const util = require('util');

const unlinkAsync = util.promisify(fs.unlink);

async function deleteFile(filePath) {
  try {
    await unlinkAsync(filePath);
    console.log(`File deleted successfully: ${filePath}`);
  } catch (err) {
    console.error(`Error deleting file: ${err.message}`);
  }
}

const fileToDelete = './fileToDelete.txt';

fs.writeFileSync(fileToDelete, 'This file will be deleted.');

console.log(`Created file: ${fileToDelete}`);

deleteFile(fileToDelete);
