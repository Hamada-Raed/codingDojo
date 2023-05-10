class BankAccount:
    	def __init__(self, int_rate, balance): 
            self.int_rate = int_rate
            self.balance = balance
        def deposit(self, amount):
            self.balance += amount
        def withdraw(self, amount):
            self.balance -= amount
        def display_account_info(self):
            print(f"{self.int_rate}")
        def yield_interest(self):
            pass
        


