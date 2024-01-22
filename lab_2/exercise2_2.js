let userInput = 2;
// let userInput = 3;
// let userInput = -2;
// let userInput = -3;
// let userInput = 0;
// let userInput = a;
// let userInput = 1.2;

if(userInput % 1 != 0){
    console.log("Your number is decimal please try again!");
}
else if (userInput > 0 && userInput % 2 == 0){
    console.log("Your number is even and a positive number");
}else if(userInput > 0 && userInput % 2 != 0){
    console.log("Your number is odd and a positive number");
}else if(userInput < 0 && userInput % 2 == 0){
    console.log("Your number is even and a negative number");
}else if(userInput < 0 && userInput % 2 != 0){
    console.log("Your number is odd and a negative number");
}else if(userInput == 0){
    console.log("Your number is even !");
}
else{
    console.log("Your input is NOT a number, please try again!!");
}