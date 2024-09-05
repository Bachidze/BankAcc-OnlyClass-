
class BankAccount{
    constructor(initValue = 0){
        this.transactionHistory = []
        this.balance = initValue
    }
    addhistory(type,amount,id){
        const history = {
            type,
            date:new Date().toISOString(),
            amount,
            id
        }
        if(!id){
            delete history.id
        }
        this.transactionHistory.push(history)
    }
    deposit(amount){
        this.balance += amount
        this.addhistory("DEPOSIT",amount)
    }
    withDraw(amount){
        if(amount > this.balance){
            console.log("Balance is not enough")
            throw new Error("Balance is not enough")
        }
        this.balance -= amount
        this.addhistory("WITHDRAW",amount)
    }
    transferMoneyToSomeone(amount,id){
        if(amount > this.balance){
            console.log("Balance is not enough")
            return
        }
        this.balance -= amount
        this.addhistory("TRANSFERTOSOMEONE",amount,id)
    }
    getBalance(){
        return this.balance
    }
    getHistory(){
        return this.transactionHistory
    }
}

const user1 = new BankAccount(100)
user1.deposit(400)
user1.transferMoneyToSomeone(50,"0122344")
user1.withDraw(100)
console.log(user1.getBalance())
console.log(user1.getHistory())
