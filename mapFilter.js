

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
 const input = [1,2,3,4,5,6,7,8,9,10];

// const ans = input.filter(filterLogic);
// console.log(ans);
const ans = input.filter((n) =>{
    if(n%2==0) return true;
})

console.log(ans);

/// create a map fn tht takes an arr and a transform fn as inp and returned transformed arr as output


