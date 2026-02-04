let numbers = [3,6,1,7,9,4];

function largestElement(numbers){
    let max = numbers[0];

    for(let i=1;i < numbers.length;i++){
        if(numbers[i] > max){
            max = numbers[i];
        }
    }
    return max;
}
console.log(largestElement(numbers));
