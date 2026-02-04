
// var a = 30
// let b = 40
// const c =50

// // console.log(a, b, c);

// if(true){
// //var a = 300
// let b = 400
// const c =505
// // console.log(a, b, c);
// }

// console.log(b, c);

// function one (){
//     const userName = "adrika"

//     function two(){
//         const website = "youtube.com"

//         console.log(userName)
//         console.log(website);
        
//     }

//    // console.log(website) // This will throw an error because 'website' is not defined in this scope
//     two()
// }

// one()

//// interesting


console.log(one (4))    //// no error
function one(num){
    return num +1
}
//one (4)      no error


//two(5)   ///// cannot access 'two' before initialization
const two = function(num){
    return num + 2
}
///two(5) no error