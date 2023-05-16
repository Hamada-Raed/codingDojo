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

class Zoo:
    def __init__(self, zoo_name):
        self.zoo_name = zoo_name
        self.animals = []

    def add_animal(self, name, age, healty_level, happiness_level):
        new_animal = Animal(name, age, healty_level, happiness_level)
        self.animals.append(new_animal)

    def display_animal(self):
        for animal in self.animals:
            print(animal)

class Lion(Animal):
    def __init__(self, kind, healty_level=1, happiness_level=2):
        self.kind = kind
        super().__init__(healty_level, happiness_level)

    def feed(self):
        self.healty_level += 5
        self.happiness_level += 4

class Tiger(Animal):
    def __init__(self, kind, healty_level=1, happiness_level=2):
        self.kind = kind
        super().__init__(healty_level, happiness_level)

    def feed(self):
        self.healty_level += 9
        self.happiness_level += 3

class Bear(Animal):
    def __init__(self, kind, healty_level=1, happiness_level=2):
        self.kind = kind
        super().__init__(healty_level, happiness_level)

    def feed(self):
        self.healty_level += 3
        self.happiness_level += 8


Lion1 = Lion("Dog", "Dog", 1, 1, 1)
Lion1.display_info()
Lion1.feed()
Lion1.display_info()
