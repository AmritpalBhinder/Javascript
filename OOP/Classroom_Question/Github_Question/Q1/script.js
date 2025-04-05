// Create a BankAccount class with a private #balance property.
// Implement deposit(amount) and withdraw(amount) methods.
// Add a getBalance() method to return the balance.

class BankAccount{

    #deposit;
    #withdraw;
    #Totalbalance;

    bank_balance(deposit,withdraw){
        this.#deposit=deposit;
        this.#withdraw=withdraw;
        this.#Totalbalance=deposit-withdraw;
    }

    getBalance(){
        document.writeln("Totalbalance:"+this.#Totalbalance);
    }
}

const balance = new BankAccount();
balance.bank_balance(200000,80000);
balance.getBalance();