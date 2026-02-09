///// async assignment here

const fs = require('fs').promises

async function writeToFile(){
    let fileHandle
try{
    fileHandle = await fs.open('a.txt' , 'w')
    await fs.writeFile('a.txt' , "hi there write file operation" , "utf-8")
    await fs.writeFile('a.txt' , "write file operation 2" , "utf-8")
    await fileHandle.write("space\n") 
    await fs.appendFile('a.txt' , "append file operation" , "utf-8")
    console.log("file created successfully")
}
catch(err){
console.log("error writing to file: " , err);
}
}

writeToFile()