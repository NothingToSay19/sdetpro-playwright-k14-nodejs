import BankingAccount from "./BankingAccount";

export default class CheckingAccount extends BankingAccount {
    private overdraftLimit: number = 50;
    deposit(depositAmount: number): number {
        return this.balance += depositAmount;
    }

    withdraw(withdrawAmount: number): number {
        if (withdrawAmount <= this.balance) {
            this.balance -= withdrawAmount;
            if (this.balance < this.overdraftLimit) {
                throw new Error(`Your ${this.balance} must remain ${this.overdraftLimit}`)
            } else {
                return this.balance;
            }
        }
        return this.balance;
    }
    getBalance(): number {
        return this.balance;
    }
}