// NodeJS file core module
// fs module ashiglaya gesen ug

var file = require("fs");

//ene moduliig ashiglaad message.txt gedeg file nii dotorhi content iig unshiya
file.readFile('message.txt', (error, data) => {
    if (error) {
        //hervee 
        console.log('Error is happening');
        throw error;
    } else {
        console.log("Content: " + data);
    }
});