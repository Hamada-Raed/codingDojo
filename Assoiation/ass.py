class Student:
    def __init__(self, name, id):
        self.name = name
        self.id = id
    def display (self): 
        print (f"{self.name} = {self.id}")

class Course:
    def __init__(self, name, students = None):
        self.name = name
        if students is None:
            self.students = []
        else:
            self.students = students

    def add_student(self, student):
        self.students.append(student)

s1 = Student("Alice", 1)
s1.display()
s2 = Student("Bob", 2)
c1 = Course("Math", [s1, s2])
print(c1.students[0].id) # Output: "Alice"

#Another example of association
class Car:
    def __init__(self, make, model):
        self.make = make
        self.model = model

class Driver:
    def __init__(self, name):
        self.name = name
        self.cars = []

    def add_car(self, car):
        self.cars.append(car)

car1 = Car('Toyota', 'Camry')
car2 = Car('Honda', 'Civic')

driver1 = Driver('Alice')
driver1.add_car(car1)
driver1.add_car(car2)



for car in driver1.cars:
    print(car.make, car.model)

