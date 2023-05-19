######################################################################
# Here is an assignment of Coding Dojo named Zoo                     #
# the purpose of the assignment is to Practice utilizing inheritance #
# and More practice with associations between classes                #
# and Practice overriding methods, See polymorphism in action        #
######################################################################


class Animal:
    def __init__(self, name, age, healty_level, happiness_level):
        self.name = name
        self.age = age
        self.healty_level = healty_level
        self.happiness_level = happiness_level

    def feed(self):
        self.healty_level += 10
        self.happiness_level += 10

    def display_info(self):
        print(
            f"Name: {self.name}\n healty level:{self.healty_level}\n happiness level:{self.happiness_level}")


class Lion(Animal):
    def __init__(self, name, age, healty_level, happiness_level):
        super().__init__(name, age, healty_level=3, happiness_level=5)
        self.color = "Yallow"

    def display_info(self):
        super().display_info()
        print(f"Color is {self.color}")


class Cat (Animal):
    def __init__(self, name, age, healty_level, happiness_level):
        super().__init__(name, age, healty_level=7, happiness_level=3)
        self.kind = 'mummals'

    def display_info(self):
        super().display_info()
        print(f"kind is {self.kind}")


class Bear (Animal):
    def __init__(self, name, age, healty_level, happiness_level):
        super().__init__(name, age, healty_level=7, happiness_level=3)
        self.sound = "meou"

    def display_info(self):
        super().display_info()
        print(f"Sound is {self.sound}")


class Zoo:
    def __init__(self, zoo_name):
        self.animals = []
        self.name = zoo_name

    def add_animal(self):
        self.animals.append(animal)

    def print_all_info(self):
        print("-"*30, self.name, "-"*30)
        for animal in self.animals:
            animal.display_info()


zoo1 = Zoo("John's Zoo")
zoo1.add_animal("Nala" ,3)

zoo1.print_all_info()
