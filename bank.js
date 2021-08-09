class Account {
    Balance = 0;
    History = [];

    deposit(amount, date) {

        if (typeof amount == 'number') {
            this.Balance += amount
            let transaction = {"date": date, "amount": amount, "balance": this.Balance}
            this.History.push(transaction)
        }
    } 

    withdraw(amount, date) {

        if (this.Balance > amount && typeof amount == 'number') {
            this.Balance -= amount
            let transaction = {"date": date, "amount": -amount, "balance": this.Balance}
            this.History.push(transaction)
        }
    }

    statement() {
        let history = this.History
        "Date || Amount || Balance\n"
        let statement = "Date || Amount || Balance\n"
        history.forEach(transaction => 
            statement += transaction.date + " || " + transaction.amount + " || " + transaction.balance + "\n") 
        return statement
    }
}

module.exports = { Account };