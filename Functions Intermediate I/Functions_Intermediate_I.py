import random


def randInt(start=0, end=101):
    return (random.randrange(start, end))


print(randInt())
print("*"*50)
print(randInt(end=10))
print("*"*50)
print(randInt(start=10))
print("*"*50)
print(randInt(start=5, end=10))
print("*"*50)
print(randInt(end=5, start=1))
print("*"*50)
# Float Random Function,


def FloatRand(start=0.0, end=0.1):
    return (random.random())


print(FloatRand())
print("*"*50)
print(FloatRand(start=0.0, end=0.5))
print("*"*50)
print(FloatRand()*50)
print("*"*50)
print(FloatRand(start=0.0, end=0.1) + 10)
