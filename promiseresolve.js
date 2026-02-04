// function waitFor3S(resolve){
//     setTimeout(resolve , 5000);
// }

// function main(){
//     console.log("main is called");
// }

// waitFor3S(main);
const fs  = require('fs');

console.log("start of file----");

function readTheFile(resolve){
    console.log("read the file is called");
    setTimeout( function(){
        console.log("callback based set timeout is completed--");
        resolve();
    } , 5000)    
}

function setTimeoutPromisified(){
    return new Promise(readTheFile);
}
const p = setTimeoutPromisified();

function callback(){
    console.log("timer is done");
    
}
p.then(callback);

console.log("end of file-----");
