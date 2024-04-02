export default abstract class BankingAccount {
    protected balance: number = 0;

    abstract getBalance(): number;
    abstract deposit(amount: number): number;
    abstract withdraw(amount: number): number;
}