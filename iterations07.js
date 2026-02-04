
// const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // const newNums = myNumers.map( (num) => { return num + 10})

// const newNums = myNumers
//                 .map((num) => num * 10 )                    //// chaining, value from first map() goes to -> 2nd map() then values from 2nd map goes to filter
//                 .map( (num) => num + 1)
//                 .filter( (num) => num >= 40)

// console.log(newNums);

const nums = [1,2,3]

const total = nums.reduce(function (acc, currval){
    console.log(`acc: ${acc} and currval: ${currval}`);
    
    return acc + currval
}, 0)
console.log(total);
