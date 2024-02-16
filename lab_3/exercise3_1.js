let intArr = [1, 2, 3, 4, 5];
let totalEvenNumber = 0;
let totalOddNumber = 0;
for (let i = 0; i < intArr.length; i++){
    if(intArr[i] % 2 === 0){
        totalEvenNumber++;
    }
    else{
        totalOddNumber++;
    }
}
console.log(`Total Even Number: ${totalEvenNumber}`);
console.log(`Total Odd Number: ${totalOddNumber}`);