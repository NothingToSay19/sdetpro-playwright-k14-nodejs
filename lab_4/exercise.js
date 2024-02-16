const readline = require('readline-sync');

const userTestBankAccount = {
    name: 'Huy Le',
    age: 33,
    bankAccount: {
        accountNumber: 1001,
        routingNumber: 'BFTVVNVX',
        balance: 500,
    }
}

const userTest1BankAccount = JSON.parse(JSON.stringify(userTestBankAccount));
userTest1BankAccount.bankAccount.accountNumber = 1002;

const bankAccounts = [userTest1BankAccount];

const nonDigitRegex = /\D+/;
let isProcessing = true;
bankingProcess();

function printMenuGame(){
    console.log(`=== Banking application===\n 1. Find an account\n 2. Update balance\n 0. Exit the program`);
}

function getUserChoice(){
    return readline.question('Please select your choice: ');
}

function getAccountNumber(){
    return readline.questionInt('Please enter your account number: ');
}

function getWithdrawAmount(){
    return readline.questionInt('Please enter amount to withdraw: ');
}

function bankingProcess(){
    while(isProcessing){
        printMenuGame();
        let userChoice = getUserChoice();
        if(userChoice === nonDigitRegex){
            readline.question('Your choice is not a number please retry: ');
        }
        else{
            if(userChoice === '1'){
                let accountNumber = Math.abs(getAccountNumber());
                findAccount(accountNumber);
            }else if(userChoice === '2'){
                let withDrawAmount = getWithdrawAmount();
                withDrawMoney(withDrawAmount);
            }else if(userChoice === '0'){
                isProcessing = false;
            }
            else{
                readline.question('Your choice is not in the list, please try again!');
            }
        }
    }
}

function findAccount(accountNumber){
    for (const bankAccount of bankAccounts) {
        if(accountNumber === bankAccount.bankAccount.accountNumber){
            console.log(`Your bank account name is: ${bankAccount.name}\nYour current balance is: ${bankAccount.bankAccount.balance}`);
        }else {
            readline.question(`Your bank account does not exist in our system, please try again!`);
        }
    }
}

function withDrawMoney(amountToWithDraw){
    for (const bankAccount of bankAccounts) {
        if(amountToWithDraw <= 0){
            readline.question('Your amount must be greater than 0, please try again!');
        }
        else if(amountToWithDraw !== 0){
            if(bankAccount.bankAccount.balance >= amountToWithDraw){
                const remaining = bankAccount.bankAccount.balance - amountToWithDraw;
                console.log(`Your balance remaining is: ${remaining}\nWithdraw successfully please remember to take out your card!`);
                bankAccount.bankAccount.balance = remaining;
            }else{
                readline.question('Your current balance is not sufficient to withdraw please re-check your balance!');
            }
        }
    }
}
