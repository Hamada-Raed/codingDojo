
class Store:
    def __init__(self, name, product=[],prod =[]):
        self.name = name
        self.product = product
        self.prod = Product(price = 0) 
    def add_product(self, new_product):
        self.product.append(new_product)

    def sell_product(self, id):
        self.product.remove(self.id)

    def inflation(self, percent_increase):
       pass

    def set_clearance(self, category, percent_discount):
        pass


class Product:
    def __init__(self, name, price, category):
        self.name = name
        self.price = price
        self.category = category

    def update_price(self, percent_change, is_increased):
        self.percent_change = percent_change
        self.is_increased = is_increased
        if is_increased == True:
            self.price += percent_change
        else:
            self.price -= percent_change

    def info(self):
        print(
            f" Name is {self.name}, category is {self.category} and price is {self.price}")


