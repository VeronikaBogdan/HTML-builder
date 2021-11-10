const fs = require("fs");
const path = require("path");

const dir = path.parse(__dirname).name;
copyDir();

function copyDir() {
  fs.mkdir(`${dir}/files-copy`, { recursive: true }, (err) => {
    if (err) throw err;
  });

  fs.readdir(`${dir}/files-copy`, { withFileTypes: true }, (err, files) => {
    if (err) console.log(err);
    else {
      files.forEach((file) => {
        if (file.isFile()) {
          fs.unlink(`${dir}/files-copy/${file.name}`, () => {
            console.log(`${file.name} was deleted`);
          });
        }
      });
    }
  });

  fs.readdir(`${dir}/files`, { withFileTypes: true }, (err, files) => {
    if (err) console.log(err);
    else {
      files.forEach((file) => {
        if (file.isFile()) {
          fs.copyFile(`${dir}/files/${file.name}`, `${dir}/files-copy/${file.name}`, () => {
            console.log(`${file.name} was copied to dest-${file.name}`);
          });
        }
      });
    }
  });


}
