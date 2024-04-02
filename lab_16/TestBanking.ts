import CheckingAccount from "./CheckingAccount";
import SavingsAccount from "./SavingsAccount";


const checkingAccount = new CheckingAccount();
const savingAccount = new SavingsAccount();
console.log(`[Saving Account] Before depositing ${savingAccount.getBalance()}`);
savingAccount.deposit(100);
console.log(`[Saving Account] After depositing ${savingAccount.getBalance()}`)

console.log(`[Saving Account] Before withdraw ${savingAccount.getBalance()}`);
savingAccount.withdraw(100);
console.log(`[Saving Account] After withdraw ${savingAccount.getBalance()}`)

console.log(`[Saving Account] Get balance ${savingAccount.getBalance()}`)


console.log(`[Checking Account] Before depositing ${checkingAccount.getBalance()}`);
checkingAccount.deposit(100);
console.log(`[Checking Account] After depositing ${checkingAccount.getBalance()}`)

console.log(`[Checking Account] Before withdraw ${checkingAccount.getBalance()}`);
checkingAccount.withdraw(51);
console.log(`[Checking Account] After withdraw ${checkingAccount.getBalance()}`)

console.log(`[Checking Account] Get balance ${checkingAccount.getBalance()}`)