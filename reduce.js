const myNums = [1,2,3,4]

// const myTotal = myNums.reduce((acc,currval) => {
//   console.log(`acc: ${acc}, currval: ${currval}`);
  
//     return acc + currval

// } ,0)

const myTotal = myNums.reduce((acc, currval) => acc + currval , 0)
//console.log(myTotal); // Output: 10


const myObj = [
 {
    itemName : 'c++',
    price: 100,
} , 
{
    itemName : "js",
    price: 200,
} , 
{
    itemName : 'rb',
    price: 300,
} 
]
const total = myObj.reduce( (acc , item) => acc + item.price , 0)
console.log(total); // Output: 600
