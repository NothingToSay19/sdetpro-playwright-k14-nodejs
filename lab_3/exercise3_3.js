let intArr = [12, 34, 1, 16,28];
let tempNum;
for(let i = 0; i < intArr.length; i++)
    for(let j = i+1; j < intArr.length; j++){
        if(intArr[i] > intArr[j]){
            tempNum = intArr[i];
            intArr[i] = intArr[j];
            intArr[j] = tempNum;
    }
}
console.log(intArr);

