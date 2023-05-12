class BankAccount:
    def __init__(self, int_rate, balance):
        self.int_rate = int_rate
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount

    def withdraw(self, amount):
        if self.balance > amount:
            self.balance -= amount
        else:
            print("Insufficient funds: Charging a $5 fee")
            self.balance -= 5

    def yield_interest(self):
        if self.balance > 0:
            yield_ = self.balance * self.int_rate
            self.balance = self.balance + yield_
            print(
                f" Because your current balance is positive, we increae yout balance to {self.balance}")

    def display_account_info(self):
        print(f"Balance: ${self.balance}")


class User:		# here's what we have so far
    def __init__(self, name, email, account):
        self.name = name
        self.email = email
        self.account = BankAccount(int_rate=0.02, balance=0)

    def deposit(self):
        self.account.balance

    def withdrawal(self):
        self.account.balance

    def display_user_balance(self):

        print(
            f"The username is {self.name} and the balance is ${self.account.balance}")

    def transfer(from_account, to_account, account_balance):
        from_account.withdrawal(account_balance)
        to_account.deposit(account_balance)
   
    accounts = []
    def add_account(self, account):
        self.accounts.append(account)


Hamada1_account =BankAccount(int_rate=0.01 , balance = 0)
Hamada1 = User("Hamada", "hamada@gmail.com",Hamada1_account ) 
Hamada2 = User("Hamada", "hamada@gmail.com",Hamada1_account ) 

Hamada1.add_account(122) 
Hamada2.add_account(126)
Hamada2.add_account(123)
Hamada2.add_account(1236)
for acc in Hamada2.accounts: 
    print (f" - {acc}")