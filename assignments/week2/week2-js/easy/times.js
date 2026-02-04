function times(n){
    
    const start = Date.now();
    let sum=0;
    for(let i=1;i<=n;i++){
        sum += i;
    }
    const end = Date.now();

    return (end - start) / 1000;
}

console.log(times(10000000000));
