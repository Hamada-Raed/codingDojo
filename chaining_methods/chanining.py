

class User:		# here's what we have so far
    def __init__(self, name, email, account_balance):
        self.name = name
        self.email = email
        self.account_balance = account_balance

    def deposit(self, amount):
        self.account_balance += amount
        return self

    def withdrawal(self, amount):
        self.account_balance -= amount
        return self

    def display_user_balance(self):
        print(
            f"The username is {self.name} and the balance is ${self.account_balance}")
        return self


Hamada = User("Hamada Raed", "Hamada@gmail.com", 1000)
Mohammad = User("Mohammad Tamer ", "Mohammad@gmail.com", 1230)
Nehal = User("Nehal Omer ", "Nehal@gmail.com", 4903)

Hamada.deposit(100).withdrawal(400).deposit(30).display_user_balance()
