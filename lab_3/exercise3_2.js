let intArr = [1,2,3,4,5];
let max;
let min;
for(let i = 0; i < intArr.length; i++){
    if(intArr[i] < intArr[i+1]){  
         max = intArr[i+1];
    }
}
console.log(`Max number in array is: ${max}`);

for(let i = 0; i < intArr.length; i++){
    if(intArr[0] < intArr[i+1]){
        min = intArr[0];
    }
}
console.log(`Min number in array is: ${min}`);
