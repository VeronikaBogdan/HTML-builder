const fs = require('fs');
const path = require('path');
const stat = require('fs');
// import { stat } from 'fs';

// const pathsToCheck = ['./txtDir', './txtDir/file.txt'];

// for (let i = 0; i < pathsToCheck.length; i++) {
//   stat(pathsToCheck[i], (err, stats) => {
//     console.log(stats.isDirectory());
//     console.log(stats);
//   });
// }
const pathToFolder = '03-files-in-folder/secret-folder';


fs.readdir(pathToFolder, 
  { withFileTypes: true },
  (err, files) => {
  console.log("\nCurrent directory files:");
  if (err)
    console.log(err);
  else {
    files.forEach((file) => {
			if(file.isFile() == true) {
				console.log(file);
				console.log(file.name);
				// fs.stat(path.join(pathToFolder, '/image.jpg'), (stats) => {
				// 	// console.log(stats.isDirectory());
				// 	console.log(file);
				// });
// // console.log(stats);
// 				console.log(path.extname(file.name));

// 				fs.stat(file, (stats) => {
// 			    console.log(stats);
// 				});
			}
    })
		console.log(path.join(pathToFolder, '/image.jpg'));
		fs.stat(path.join(pathToFolder, '/image.jpg'), (stats) => {
		// console.log(stats.isDirectory());
		console.log(stats);
		});
  }
})