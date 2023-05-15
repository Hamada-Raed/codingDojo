
class Store:
    def __init__(self, name):
        self.name = name
        self.product = []
        
    def add_product(self, name, price, category):
        new_product = Product(name,price,category)
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
        yield_value  = self.price * percent_change
        if is_increased == True:
            self.price += yield_value
        else:
            self.price -= yield_value

    def info(self):
        print(
            f" Name is {self.name}, category is {self.category} and price is {self.price}")



Hamada_store = Store ("Hamada")
Hamada_store.add_product("meat" , 100 , "Engine")