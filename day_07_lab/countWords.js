const readline = require('readline-sync');

const digitReg = /\d/g;

const specialCharsReg = /[^a-zA-Z]+/gi;

const special = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi;

let isSuccess = true;

const countObj = {};

function replaceAndSplit(givenText){
    return givenText.trim().toLowerCase().replace(specialCharsReg, " ").split(" ");
}

countGivenText();

function printMenuGame(){
    console.log(`=== Counting Given Text Application===`);
}

function getUserText(){
    return readline.question('Input your text: ');
}

function countWords(element){
    countObj[element] = (countObj[element] || 0) + 1;
};

function countGivenText(){
    while(isSuccess){
        printMenuGame();
        let givenText = getUserText();
        let wordsArray = replaceAndSplit(givenText);
        if(isIncludingDigit(givenText)){
            readline.question("Your given text contains number, please re-check! - press Enter to navigate to Input text");
        }
        else if(isIncludingSpecialChar(givenText)){
            readline.question("Your given text contains special char(s), please re-check! - press Enter to navigate to Input text");
        }
        else if(!givenText){
            readline.question("Your text is empty, please input your text! - press Enter to navigate to Input text"); 
        }
        else{
            wordsArray.forEach(countWords);
            console.log(`Your result is:`);
            console.log(countObj);
            isSuccess = false;
        }
    }
};

function isIncludingDigit(givenText){
    return givenText.match(digitReg); 
}
function isIncludingSpecialChar(givenText){
    return givenText.match(special); 
}