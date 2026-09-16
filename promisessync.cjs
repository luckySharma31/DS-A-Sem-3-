const fs = require('fs').promises;
async function writeFile(){
    try {
        await fs.writeFile ("promise.txt", "Hello everyone!");
        console.log("File created and data writtenn successfully.");
    }
    catch (error){
        console.error("Error",error);
    }
};

writeFile();

//read file

async function readFile(){
    try {
        const data = await fs.readFile("promise.txt", "utf8");
        console.log("File contents: ", data);
    } catch (error) {
        console.error("Error occured: ", error);
    }
}

readFile();

//append file

async function appendFile(){
    try{
        await fs.appendFile("promises.txt", "\n Semester 3");
        console.log("Text updated successfully");
    }
    catch(error){
        console.error("Error occured : ", error);
    }
}

appendFile();

//rename file

async function renameFile(){
    try{
        await fs.rename("promise.txt", "renamed.txt");
        console.log("File renamed successfully.");
    }
    catch(error){
        console.error("Error occured: " , error);
    }
}
renameFile();

//delete file

async function deleteFile(){
    try{
        await fs.unlink("delsample.txt");
        console.log("File deleted successfully. ");
    }
    catch(error){
        o
    }
}