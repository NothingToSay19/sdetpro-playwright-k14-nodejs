let intArr = [-1,-2,-5,-4,0];
let max = intArr[0];
let min = intArr[0];
for(let i = 0; i < intArr.length; i++){
    if(intArr[i+1] >= max){
        max = intArr[i+1];
    }
}

for(let i = 0; i < intArr.length; i++){
    if(intArr[i+1] <= min){
        min = intArr[i+1];
    }
}
console.log(`Max number in array is: ${max}`);
console.log(`Min number in array is: ${min}`);

