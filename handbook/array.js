// Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()

// push() - adds one or more elements to the end of an array and returns the new length of the array.

// function pushEle(arr , ele){
//     console.log("original array: " , arr);

//     arr.push(ele);

//     console.log("new array: " , arr);
// }

// console.log(pushEle([1,2,3,4] , 8));    /// undefined also comes as push gives back length of new array

// function popEle(arr){
//     arr.pop();
//     return arr;
// }
// const arr= [2,3,4,5];
// console.log(popEle(arr));

//// shift() - removes the first element from an array and returns that removed element. This method changes the length of the array.

// function shiftEle(arr){
//    const x= arr.shift();
//     return {shifted: x , newArr: arr};
// }
// const arr=[2,3,6,9];
// console.log(shiftEle(arr));

////unshift() - adds one or more elements to the beginning of an array and returns the new length of the array.
// function unshiftEle(arr,ele){
//     const x = arr.unshift(ele);
//     return {newlength:x , newArray:arr};
// }
// const arr=[3,6,9,10];
// console.log(unshiftEle(arr,12));

/// concat() - is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

// function concatenate(arr1,arr2){
//     const newArr = arr1.concat(arr2);
//     return newArr;
// }
// console.log(concatenate([2] , [5]));

//// forEach() - executes a provided function once for each array element.

const arr= [23,45,67,12];
function forEachUse(arr){
    arr.forEach(function(_,idx){
        console.log(idx);
        
    })
}
console.log(forEachUse(arr));

