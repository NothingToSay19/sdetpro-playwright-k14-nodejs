let intArr01 = [1, 12, 16, 28, 34];
let intArr02 = [1, 13, 16, 27, 99];
let mergeArr = intArr01.concat(intArr02);
let tempNum;
for(let i = 0; i < mergeArr.length; i++)
    for(let j = i+1; j < mergeArr.length; j++){
        if(mergeArr[i] > mergeArr[j]){
            tempNum = mergeArr[i];
            mergeArr[i] = mergeArr[j];
            mergeArr[j] = tempNum;
    }
}
console.log(mergeArr);

