#########################################################################
# This file is for solving the assignment "MathDojojo"  problem with    #
# er  we #                                                              #
#########################################################################


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


math_dojo = MathDojo()
x = math_dojo.add(2).add(2, 5, 1).subtract(3, 2).result
print(x)
y = math_dojo.add(4).add(1, 2, 6, 4, 0, 3).subtract(3, 2, 0, 3, 2).result
print(y)
z = math_dojo.add(4).add(1, 2, 0, 3).add(1,2,3,4).subtract(4,3,2,1).result
print(z)
