class Account {
    Balance = 0;

    deposit(amount) {
        if (typeof amount == 'number') {
            this.Balance += amount
        }
    } 

    withdraw(amount) {

        if (this.Balance > amount && typeof amount == 'number') {
            this.Balance -= amount
        }
    }
}

module.exports = { Account };