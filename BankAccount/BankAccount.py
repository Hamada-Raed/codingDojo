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
            print(f" Because your current balance is positive, we increae yout balance to {self.balance}")

    def display_account_info(self):
        print(f"Balance: ${self.balance}")


client1 = BankAccount(5, 200)
client1.withdraw(200)
client1.display_account_info()
client1.yield_interest()


client2 = BankAccount(5, 500)
client2.withdraw(80)
client2.display_account_info()
client2.yield_interest()

client3 = BankAccount(5, 600)
client3.deposit(300)
client3.display_account_info()
client3.yield_interest()
