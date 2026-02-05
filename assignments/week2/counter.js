
let n = 0;

const counter = () =>{
    n++;
    console.log(n);
    setTimeout(counter,1000);    
} 
// (setInterval(counter, 1000));

counter();