const fs = require('fs').promises

async function readTheFile(){

    try{
        const data = await fs.readFile("b.txt" , "utf-8");
        console.log("file data: " , data);
      const dataNew=   data.trim().replace(/\s+/g, ' ');
        console.log("after trim: " , dataNew );
        
    }
    catch(err){
        console.log("error loading data: " , err);
        
    }

}
readTheFile()