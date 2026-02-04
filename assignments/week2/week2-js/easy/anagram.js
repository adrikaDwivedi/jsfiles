function isAnagram(str1 , str2){
    str1 = str1.replace(/\s/g , "").toLowerCase();
    str2 = str2.replace(/\s/g , "").toLowerCase();

    if(str1.length !== str2.length){
        return false;
    }
        const freq = [];

        for(let i of str1){
            freq[i] = (freq[i] || 0) +1;
        }

        for(let i of str2){
            if(!freq[i]){
                return false;
            }
            freq[i]--;
        }
    return true;
}

console.log(isAnagram("hello" , "oloeh"));

function isAnagram2(str1 , str2){
    str1 = str1.replace(/\s/g , "").toLowerCase().split("").sort().join("");
    str2 = str2.replace(/\s/g , "").toLowerCase().split("").sort().join("");
    return str1 === str2;
}
console.log(isAnagram2('hello' , 'ollew'));
