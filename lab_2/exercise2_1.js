const prompt = require("prompt-sync")();
let userWeight = prompt('Enter user weight: ');
let userHeight = prompt('Enter user height: ');
let bmi = Number(userWeight) / (Number(userHeight) * 2)
console.log(`Your BMI is: ${bmi}`);
let isEvenNumber = userWeight / 2 == 0 && userHeight / 2 == 0;
// let baseBMINormalWeight = 18.5;
// let baseBMIOverWeight = 29.9;
// let suggestIncreaseWeight = baseBMINormalWeight - bmi;
// let suggestDecreaseWeight = baseBMIOverWeight - bmi;
if(bmi >= 18.5 && bmi <= 24.9){
    console.log("You are Normal weight!");
}else if(bmi < 18.5){
    console.log("You are Underweight!");
    // console.log(`You are Underweight! - should increase ${suggestIncreaseWeight} kg`);
} else if(bmi >= 25 && bmi <= 29.9){
    console.log("You are Overweight!");
    // console.log(`You are Overweight! - should decrease ${suggestDecreaseWeight} kg`);  
}else{
    console.log("You are Obesity!"); 
}
let evenNumberOrOddNumber = isEvenNumber ? console.log('User input is even number') : console.log('User input is odd number');
