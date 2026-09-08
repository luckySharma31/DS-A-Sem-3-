const fs = require('fs');

fs.writeFileSync('example.txt','This is a new experiment' , 'utf8');

console.log('File is written successfully');

//read
const data = fs.readFileSync('example.txt','utf8');
console.log('file created successfully',data);

//append
fs.appendFileSync('example.txt', 'This is a very new file' , 'utf8');
console.log('file content is appended');

//delete file
//fs.unlinkSync('example2.txt');
//console.log('File is deleted successfully');

//folder create
//fs.mkdirSync('sample folder');
//console.log('New folder is created');

if (!fs.existsSync('sample folder')) {
    fs.mkdirSync('sample folder');
    console.log('New folder is created');
} else {
    console.log('Folder already exists');
}