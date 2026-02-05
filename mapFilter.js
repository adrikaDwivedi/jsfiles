

// const input = [2,4,6,8,10];

// function transform(i){
//     return i*2;
// }

// const ans = input.map(transform);
// console.log(ans);

// const input = [2,4,6,8,10];

// const ans = input.map(function(i){
//     return i*2;
// })
// console.log(ans);

// function filterLogic(n){
//     if(n%2==0) return true;
//     else return false;
// }
 const arr = [1,2,3,4,5,6,7,8,9,10];

// const ans = input.filter(filterLogic);
// // console.log(ans);
// const ans = input.filter((n) =>{
//     if(n%2==0) return true;
// })

// console.log(ans);

/// create a map fn tht takes an arr and a transform fn as inp and returned transformed arr as output

//     function fn(n){
//         return n*n;
//     }
//     function myMap(arr , fn){
//         const outp = [];
//         for(let i=0;i<arr.length;i++){
//             outp.push(fn(arr[i]));
//         }
//         return outp;
//     }
// const ans = myMap(arr,fn);
// console.log(ans);

// const map = (arr,fn) =>{
//     const outp = [];
//     for(let i=0;i<arr.length;i++){
//         outp.push(fn(arr[i]));
//     }
//     return outp;
// }
// console.log(map(arr, (n)=>n+2));

// function findExample(arr) {
//   console.log("Original Array:", arr);

//   let found = arr.find(function(item) {
//     return item > 3;
//   });
//   console.log("After find:", found);
// }
// findExample([1, 2, 3, 4, 5]);

// function sortExample(arr) {
//   console.log("Original Array:", arr);

//   arr.sort(function(a, b) {
//     return a - b;
//   });
//   console.log("After sort:", arr);
// }
// sortExample([5, 2, 3, 4, 1]);

function shiftExample(arr) {
  console.log("Original Array:", arr);

  arr.shift();
  console.log("After shift:", arr);
}
shiftExample([1, 2, 3]);