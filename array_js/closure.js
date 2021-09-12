const  bank= owner =>{
     balance = 0 ;
    return {
        deposit: amount => {
            balance = balance + amount;
            return balance;
    
        },
        withdraw: amount => {
            balance = balance - amount;
            return balance;
    
       }   }
}

const mofizbank= bank("farhan");
console.log(mofizbank.deposit(90));
console.log(mofizbank.withdraw(32));



/* const bank = owner => {
    balance = 0;
    return amount => {
        balance = balance + amount;
        return balance;

    }
}

const baperBank = bank('faru')
 console.log(baperBank(900));
 console.log(baperBank(900));
 console.log(baperBank(900)); */