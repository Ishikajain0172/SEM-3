const fs = require('fs')
//callback based method

//create a file
fs.writeFile('notes.txt', "ECE-A", (err) => {
    if (err){
        console.log(err);
        return;
    }
  console.log('File created successfully in the file notes.txt !');
})

//read a file
fs.readFile('notes.txt',"utf8", (err, data) => {
    if (err){
        console.log(err);
        return;
    }
    console.log(data);
})

//update a file
const updateData = "ECE-A is a great subject";
fs.appendFile('notes.txt', updateData, (err) => {
    if (err){
        console.log(err);
        return;
    }
    console.log('File updated successfully in the file notes.txt !');
})
