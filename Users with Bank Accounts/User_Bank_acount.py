
class User:		
    def __init__(self, name, email, account_balance):
        self.name = name
        self.email = email
        self.account_balance = account_balance

    def deposit(self, amount):
        self.account_balance += amount

    def withdrawal(self, amount):
        self.account_balance -= amount

    def display_user_balance(self):

        print(f"The username is {self.name} and the balance is ${self.account_balance}")

    def transfer(from_account, to_account, account_balance):
        from_account.withdrawal(account_balance)
        to_account.deposit(account_balance)
        
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