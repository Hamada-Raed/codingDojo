
class MathDojo:
    def __init__(self):
        self.result = 0

    def add(self, num, *nums):
        for i in nums:
            self.result += num
            self.result += i
        return self

    def subtract(self, num, *nums):

        for i in nums:
            self.result -= num
            self.result -= i
        return self


md = MathDojo()
x = md.add(2).add(2, 5, 1).subtract(3, 2).result
print(x)
y = md.add(4).add(1, 2, 6, 4, 0, 3).subtract(3, 2, 0, 3, 2).result
print(y)
z = md.add(4).add(1, 2, 0, 3).add(1,2,3,4).subtract(4,3,2,1).result
print(z)
