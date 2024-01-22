let userWeight = 90;
let userHeight = 1.5;

const BMI = calculateBMI(userWeight, userHeight);
console.log(`Your BMI is: ${BMI}`);

const BMI_NORMAL_WEIGHT_TO_INCREASE = 18.5;
const SUGGESTED_INCREASE_WEIGHT = calculateWeightToIncrease(BMI_NORMAL_WEIGHT_TO_INCREASE, userHeight, userWeight);

const BMI_NORMAL_WEIGHT_TO_DECREASE = 24.99;
const SUGGESTED_DECREASE_WEIGHT = calculateWeightToDecrease(BMI_NORMAL_WEIGHT_TO_DECREASE, userHeight, userWeight);

if(BMI >= 18.5 && BMI <= 24.99){
    console.log("You are Normal weight!");
}else if(BMI < 18.5){
    console.log(`You are Underweight! - should increase ${SUGGESTED_INCREASE_WEIGHT} kg to become normal weight`);
} else if(BMI >= 25 && BMI <= 29.99){
    console.log(`You are Overweight! - should decrease ${SUGGESTED_DECREASE_WEIGHT} kg to become normal weight`);  
}else{
    console.log(`You are Obesity! - should decrease ${SUGGESTED_DECREASE_WEIGHT} kg to become normal weight`); 
}

function calculateWeightToIncrease(BMI_NORMAL_WEIGHT_TO_INCREASE, userHeight, userWeight){
    let normalWeightToIncrease = BMI_NORMAL_WEIGHT_TO_INCREASE * (userHeight*2);
    return normalWeightToIncrease - userWeight;
}

function calculateWeightToDecrease(BMI_NORMAL_WEIGHT_TO_DECREASE, userHeight, userWeight){
    let normalWeightToDecrease = BMI_NORMAL_WEIGHT_TO_DECREASE * (userHeight*2);
    return userWeight - normalWeightToDecrease;
}

function calculateBMI(userWeight, userHeight){
    return userWeight / (userHeight * 2);
}