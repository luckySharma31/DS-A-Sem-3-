const fs = require('fs');
fs.writeFile(
    'example.txt','Welcome',(err)=>{
        if(err){
            console.log('error creating file', err);
            return;
        }
        console.log('file created successfully');
    }
);

fs.readFile('example.txt','utf8',(err,data)=>{
    if(err){
        console.error('error reading file',err);
        return;
    }
    console.log('file contents:',data);
});

fs.appendFile('example.txt','semester 3',(err)=>{
    if(err){
        console.error('error updating file:',err);
    }
    else{
        console.log('\n File updated successfully');
    }
});
//updated read
fs.readFile('example.txt','utf8',(err,data)=>{
    if(err){
        console.error('error reading file',err);
        return;
    }
    console.log('file contents:', data);
});
//delete
fs.unlink('lucky.txt',(err)=>{
    if(err){
        console.log('error deleting file: ', err);
    }
    else{
        console.log('file deleted successfully');
    }
});




