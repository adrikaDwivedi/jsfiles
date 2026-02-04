// /// function to take arr of objects as input and return ser whose age is > 18 ans user is male

// function f(arr){
//  let arr2 = [];
//  for(let i=0;i<arr.length;i++){
//     if(arr[i].age > 18 && arr[i].gender === 'male'){
//         arr2.push(arr[i]);
//     }
//  }
//  return arr2;
// }

// const users = [
//     {
//         name: 'John',
//         age: 25,    
//         gender: 'male'
//     } , 
//     {
//         name: 'Jane',
//         age:20,
//         gender: 'female'
//     }, 
//     {
//         name: 'Jim',
//         age:13,
//         gender:'male'
//     },
//     {
//         name: 'jack',
//         age: 20,
//         gender: 'male'
//     }
// ]

// console.log(f(users));
  
const fsa = require('fs');

const content = fsa.readFileSync('a.txt' , 'utf-8');
console.log(content);
