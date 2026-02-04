// for of

// ["", "", ""]          aaray of string
// [{}, {}, {}]            array of objects

const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     //console.log(num);
// }
for (const num of arr) {
   // console.log(`Each number is ${num}`);
}

const greetings = "Hello world!"
for (const greet of greetings) {
   // console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()               // maps dosent do duplicates, ek hi key value pair store hota h
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

// for (const [key, value] of map) {
//     // console.log(key, ':-', value);                           /// key value form output
// }

for (const idx of map) {
   // console.log(idx);                          // key value pair as array output    
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);                        /// object is not iterable
// }