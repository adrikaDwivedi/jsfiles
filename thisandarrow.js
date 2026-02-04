// const user ={
//     username: "hitesh",
//     price: 199,

//     welcomeMessage: function(){
//         console.log(`Welcome ${this.username}, your price is ${this.price}`);
//         console.log(this);
//     }
// }

// user.welcomeMessage();
// user.username = "awwdrika"
// user.welcomeMessage()

// console.log(this); // 'this' refers to the global object in non-strict mode, or undefined in strict mode ie in node it gives {} , int windows in gives windows obj


// function chai (){
//     const name = "adrika"   
//     console.log(this.name); /// this will not work as expected in node, it will give undefined, becaise its inside a function and 'this' refers to the global object in non-strict mode, which does not have 'name' property
// }
//  chai()  //node wale sare this context ko global object ke sath bind karte hain


 //////////////// arrrow function 

// addnum = (num1,num2) => { 
//     return num1 + num2;
//  }
 //console.log(addnum(5,6)); // 11
 /*
 addnum = (num1,num2) => num1 + num2; // this is a shorthand for the above function
 addnum = (num1,num2) => ({result: num1 + num2}); // this will return an object with result property

 objects can only be returned with () parentheses, otherwise it will be treated as a block of code
 */
// const addtwo = () => ({username: "adrika"})
// console.log(addtwo()); // { username: 'adrika' }

// const addtwo = () => {username: "adrika"}               ///// undefined
// console.log(addtwo()); // { username: 'adrika' }


//implicit return is when you don't use the return keyword, but instead use an expression that returns a value. This is common in arrow functions with a single expression.
// explicit return is when you use the return keyword to return a value from a function. This is common in regular functions or arrow functions with multiple statements.


//// IIFE immediately invoked function expression

(function one(){
    console.log("I am one");
})();
 /////// fucntion declaration ko () ke andar likhne se IIFE ban jaata hai, jo ki turant invoke ho jaata hai, 
 //// basically used so that global declaration ki wajah se function ke andar ke variables pollute na ho, sbki respective scope ban rahe
 /// ()()

 (function two(){
    console.log("I am two");
 }) ();

 /// iife doesnt know when to stop the execution of the function, that why ; is imp.

 ( (name) => {
    console.log(`Hello ${name}`);    /// arrow function can also be used as IIFE
 }) ("adrika")