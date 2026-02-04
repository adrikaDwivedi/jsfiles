function vowelsCount(str){
    const vowels = 'aeiouAEIOU';
    let cnt=0;

    for(let char of str){
        if(vowels.includes(char)){
            cnt++;
        }
    }
    return cnt;
}

console.log(vowelsCount("you there"));
