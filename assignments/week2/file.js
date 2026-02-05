const fs = require('fs');

const data = fs.readFileSync('a.txt' , 'utf-8');

try{
    console.log(data);
}
catch(err){
    console.log(err);
    
}

    let a=0
    for(let i=0;i<1000000000;i++){
        a++;
    }
console.log(a);
    