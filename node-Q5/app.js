const unzipper = require('unzipper');
const fs = require('fs');
const path = require('path');

const zipFilePath = 'D:\ict\ict-3\nodejs\OSWD-main\khush_patel\node-Q4\files_to_zip.zip';

const extractToFolder = 'D:\ict\ict-3\nodejs\OSWD-main\khush_patel\node-Q5\files_to_zip.zip';

async function unzipFile(zipPath, extractPath) {
  try {
    if (!fs.existsSync(zipPath)) {

      console.error(`Zip file does not exist: ${zipPath}`);
      return;
    }

    if (!fs.existsSync(extractPath)) {
      fs.mkdirSync(extractPath, { recursive: true });
    }

    console.log(`Extracting ${zipPath} to ${extractPath} ...`);

    await fs.createReadStream(zipPath)
      .pipe(unzipper.Extract({ path: extractPath }))
      .promise();

    console.log('Extraction complete!');
  } catch (err) {
    console.error('Error during extraction:', err);
  }
}

unzipFile(zipFilePath, extractToFolder);
