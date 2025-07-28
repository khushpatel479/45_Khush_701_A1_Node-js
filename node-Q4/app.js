const fs = require("fs");
const path = require("path");
const archiver = require("archiver");

const sourceFolder = path.join(__dirname, "files_to_zip");
const file1Path = path.join(sourceFolder, "file1.txt");
const file2Path = path.join(sourceFolder, "file2.txt");
const outPath = path.join(__dirname, "files_to_zip.zip");

function prepareFiles() {
  if (!fs.existsSync(sourceFolder)) {
    fs.mkdirSync(sourceFolder);
  }

  fs.writeFileSync(file1Path, "hello node js", "utf8");
  fs.writeFileSync(file2Path, "i am learn node js", "utf8");

  console.log("Files created successfully.");
}

function zipFolder(sourceFolder, outPath) {
  const output = fs.createWriteStream(outPath);
  const archive = archiver("zip", { zlib: { level: 9 } });

  return new Promise((resolve, reject) => {
    output.on("close", () => {
      console.log(`Zipped ${archive.pointer()} total bytes`);
      console.log(`Zip file created at: ${outPath}`);
      resolve();
    });

    archive.on("error", (err) => reject(err));

    archive.pipe(output);

    archive.directory(sourceFolder, false);

    archive.finalize();
  });
}

prepareFiles();

zipFolder(sourceFolder, outPath)
  .then(() => console.log("Zipping completed successfully."))
  .catch((err) => console.error("Error during zipping:", err));
