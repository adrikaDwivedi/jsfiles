// data types: 2 types

// prmitive data types
// 1. number    
// 2. string
// 3. boolean       
// 4. null
// 5. undefined
// 6. symbol
// 7. bigint

const num = 23;
const str = "adrika"
const isLoggedIn = false;
const num2 = null;        // object
const notDefined = undefined;
const sym = Symbol("123");
const bigIntNum = 1234567890123456789012345678901234567890n

console.table([num, str, isLoggedIn, num2, notDefined, sym, bigIntNum]);
console.table([typeof num, typeof str, typeof isLoggedIn, typeof num2, typeof notDefined, typeof sym, typeof bigIntNum]);

// non-primitive data types   // non primitive all give object typrof
// 1. object
// 2. array
// 3. function            // this gives function obj , called function only -- actually mein this is object type only

const heros  = ["Shiva", "Krishna", "Rama"];

const myObj = {
    name: "Adrika",
    age: 23,
}

const func1 =  function(){
    console.log("hello world from function");
    
}
console.table([heros, myObj, func1]);
console.table([typeof heros, typeof myObj, typeof func1]);