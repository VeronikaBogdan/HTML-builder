const fs = require("fs");
const path = require("path");

const pathToFolder = "05-merge-styles/styles";
let arr = [];
fs.unlink(path.join(__dirname, "project-dist", "bundle.css"), () => {});

fs.readdir(pathToFolder, { withFileTypes: true }, (err, files) => {
  if (err) console.log(err);
  else {
    files.forEach((file) => {
      if (file.isFile() && path.extname(file.name) == ".css") {
        const fileInDir = path.join(pathToFolder, file.name);

        let stream = new fs.ReadStream(fileInDir, { encoding: "utf-8" });

        stream.on("readable", function () {
          let data = stream.read();
          if (data) {
            arr.push(data);
            arr.forEach((i) => {
              fs.appendFile(
                path.join(__dirname, "project-dist", "bundle.css"),
                i,
                (err) => {
                  if (err) throw err;
                }
              );
            });
          }
        });
      }
    });
  }
});
