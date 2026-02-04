// const promiseOne = new Promise( function (resolve , reject){

//     setTimeout(function (){
//         console.log('Promise One Resolved');
//         resolve();
//     } , 1000)
// })

// promiseOne.then(function (){              //// promise consume
//     console.log('Promise One Fulfilled');                        //// .then --- resolve
    
// })

// new Promise(function (resolve , reject){
//     setTimeout(function (){
//         console.log('Promise Two Resolved');
//         resolve();
//     } , 2000)
// }).then(function(){
//     console.log('Promise Two Fulfilled');                        //// .then --- resolve
// })

// const promiseThree = new Promise (function (resolve, reject){
//     setTimeout(function (){
//         resolve({username: "adrika" , age: 25});
//     } , 2000 )
// })

// promiseThree.then(function (user){
//     console.log(user);
    
// })

// const promiseFour = new Promise(function(resolve , reject){
//     setTimeout(function(){
//         let err = true;
//         if(!err){
//             resolve({username: "abc" , age: 24})
//         }
//         else{
//             reject('Error: Something went wrong');
//         }
//     })
// })
// promiseFour
// .then(function(user) {
//     console.log(user);
//     return user.username;
// })
// .then(function(username){
//     console.log(username);
// })
// .catch(function(err){
//     console.log(err);
// })
// .finally(function (){
//     console.log("finally is always executed");
// })

const promiseFive = new Promise(function(resolve , reject){
    setTimeout(function(){
        let err = false;
        if(!err){
            resolve({username: "adrika" , age: 25});
        }else{
            reject('Error: Something went wrong');
        }
    } , 1000)   
})

async function promiseFiveC(user){
    try {
        const response = await promiseFive
        console.log(response);        
    } catch (err) {
        console.log(err);
    }
}
promiseFiveC();