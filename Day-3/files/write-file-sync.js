var fs = require("fs");

var content = "this is the content of the file";

fs.writeFileSyns('message.txt', content);

console.log('File written successfully'); 