
# Countdown

result = []


def Countdown(num):
    for i in range(num, -1, -1):
        result.append(i)
    print(result)


Countdown(5)

# Print and Return


def my_function(mylist):
    print(mylist[0])
    return mylist[1]


my_function([1, 2])


# First Plus Length
def sum(arr):
    newArr = []
    count = 0
    for i in range(0, len(arr), 1):
        if len(arr) == 1:
            print("False")
        elif arr[1] < arr[i]:
            newArr.append(arr[i])
            count += 1
    print(count)
    print(newArr)


sum([3])


def length_Value(size, value):
    arr = []
    for x in range(size):
        arr.append(value)

    print(arr)

# This Length, That Value


length_Value(6, 2)
