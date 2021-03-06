const { Account } = require('./bank')

test('on creation of new account, balance is initialised', () => {
    //Arrange
    const account = new Account()
    let expected = 0

    //Act
    let balance = account.Balance

    //Assert
    expect(balance).toBe(expected)
})

test('that balance increases after a deposit', () => {
    //Arrange
    const account = new Account()
    let expected = 1000

    //Act
    account.deposit(1000)
    let balance = account.Balance

    //Assert
    expect(balance).toBe(expected)
})

test('that only valid number is accepted', () => {
    const account = new Account()
    let expected = 0

    account.deposit('whdjhhjd')
    let balance = account.Balance

    expect(balance).toBe(expected)
})

test('that undefined input is not accepted', () => {
    const account = new Account()
    let expected = 0

    account.deposit()
    let balance = account.Balance

    expect(balance).toBe(expected)
})

test('that user cannot go into overdraft', () => {
    const account = new Account()
    let expected = 0

    account.withdraw(1000)
    let balance = account.Balance

    expect(balance).toBe(expected)

})

test('that user can withdraw a valid amount', () => {
    const account = new Account()
    let expected = 500
    
    account.deposit(1000)
    account.withdraw(500)
    let balance = account.Balance

    expect(balance).toBe(expected)
})

test('cannot withdraw with an invalid input', () => {
    const account = new Account()
    let expected = 1000
    
    account.deposit(1000)
    account.withdraw('hdw')
    let balance = account.Balance

    expect(balance).toBe(expected)
})

test('account can store a deposit', () => {
    //if any deposits/withdrawals performed I want them stored
    //in a variable
    const account = new Account()
    let expected = [{"amount": 500, "balance": 500}]

    account.deposit(500)
    let balance = account.Balance
    let history = account.History

    expect(history).toEqual(expected)
})

test('account can store a withdrawal as a negative number', () => {
    //if any deposits/withdrawals performed I want them stored
    //in a variable
    const account = new Account()
    let expected = [
        {"amount": 1000, "balance": 1000},
        {"amount": -500, "balance": 500}
    ]

    account.deposit(1000)
    account.withdraw(500)
    let history = account.History

    expect(history).toEqual(expected)
})

test('user can print a statement of previous transactions', () => {
    const account = new Account()
    let expected =
    "Date || Amount || Balance\n10/01/2021 || 1000 || 1000\n13/01/2021 || 2000 || 3000\n14/01/2021 || -500 || 2500\n"

    account.deposit(1000, "10/01/2021")
    account.deposit(2000, "13/01/2021")
    account.withdraw(500, "14/01/2021")
    //let history = account.History
    let statement = account.statement()

    expect(statement).toEqual(expected)
})