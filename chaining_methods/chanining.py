
class User:		# here's what we have so far
    def __init__(self, name, email, account_balance):
        self.name = name
        self.email = email
        self.account_balance = account_balance

    def deposit(self, amount):
        self.account_balance += amount

    def withdrawal(self, amount):
        self.account_balance -= amount

    def display_user_balance(self):

        print(
            f"The username is {self.name} and the balance is ${self.account_balance}")

    def transfer(from_account, to_account, account_balance):
        from_account.withdrawal(account_balance)
        to_account.deposit(account_balance)


Hamada = User("Hamada Raed", "Hamada@gmail.com", 1000)
Mohammad = User("Mohammad Tamer ", "Mohammad@gmail.com", 1230)
Nehal = User("Nehal Omer ", "Nehal@gmail.com", 4903)


Hamada.display_user_balance()
Mohammad.display_user_balance()
