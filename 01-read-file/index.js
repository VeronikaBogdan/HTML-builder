const fs = require('fs');

//fs.ReadStream наследует от stream.Readable
var stream = new fs.ReadStream('01-read-file/text.txt', {encoding: 'utf-8'});
 
stream.on('readable', function(){
    var data = stream.read();
    console.log(data);
});