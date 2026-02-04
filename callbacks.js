// callback function for sum and cube

function square(n){
    return n * n;
}

function cube(n){
    return n * n * n;
}

function sumOfSqCube(a , b, fn){
    // let sq = square(a);
    
    // let sq1= square(a);
    // let sq2 = square(b);
    // return sq1+sq2;

    // let cube = cube(b);
    // return sq + cube;
    return fn(a) + fn(b);
}

let ans = sumOfSqCube(1 , 2 , cube);
console.log(ans);;
