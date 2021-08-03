class Account {
    Balance = 0;
    History = [];

    deposit(amount) {

        if (typeof amount == 'number') {
            this.Balance += amount
            let transaction = {"amount": amount, "balance": this.Balance}
            this.History.push(transaction)
        }
    } 

    withdraw(amount) {

        if (this.Balance > amount && typeof amount == 'number') {
            this.Balance -= amount
            let transaction = {"amount": -amount, "balance": this.Balance}
            this.History.push(transaction)
        }
    }
}

module.exports = { Account };