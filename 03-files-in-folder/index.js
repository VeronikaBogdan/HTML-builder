const fs = require("fs");
const path = require("path");
const stat = require("fs");

const pathToFolder = "03-files-in-folder/secret-folder";

fs.readdir(pathToFolder, { withFileTypes: true }, (err, files) => {
  if (err) console.log(err);
  else {
    files.forEach((file) => {
      if (file.isFile()) {
        fs.stat(path.join(pathToFolder, `/${file.name}`), (err, stats) => {
					console.log(
            `${path.parse(file.name).name} - ${path.extname(file.name)} - ${Math.ceil(
              stats.size / 1024
            )} kb`
          );
        });
      }
    });
  }
});
