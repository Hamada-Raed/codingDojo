# Biggie Size

def big(arr):
    for i in range(len(arr)):
        if arr[i] > 0:
            arr[i] = 'big'
    return arr


print(big([-1, 2, 3]))


# Count Positives

def countPositive(arr):
    sum = 0
    for i in range(len(arr)):
        if arr[i] > 0:
            sum = sum + arr[i]

    arr[len(arr)-1] = sum

    return arr


print(countPositive([1, 6, -4, -2, -7, -2]))

# Sum Total


def sum(arr):
    total = 0
    for i in range(len(arr)):
        total += arr[i]

    return total


print(sum([1, 2, 3, 4]))


# Average

def avg(arr):
    total = 0
    for i in range(len(arr)):
        total += arr[i]

    return total/len(arr)


print(avg([1, 2, 3, 4]))

# Length


def Length(arr):
    count = 0
    for i in range(len(arr)):
        count += 1
    return count


print(Length([1, 2, 3, 4, 4]))


# Minimum

def Minimum(arr):
    if len(arr) == 0:
        return False
    min = arr[0]
    for i in range(len(arr)):
        if arr[i] < min:
            min = arr[i]
    return min


print(Minimum([5, 2, 1, 0]))

print("*"*50)

# Maximum


def Maximum(arr):
    if len(arr) == 0:
        return False
    max = arr[0]
    for i in range(len(arr)):
        if arr[i] > max:
            max = arr[i]

    return max


print(Maximum([5, 2, 3]))

# Ultimate Analysis   #Qusetion
print("*"*50)


# Ultimate Analysis

def Ultimate(arr):
    count = 0
    total = 0
    min = arr[0]
    max = arr[0]
    dict = {}
    for i in range(len(arr)):
        count += 1
        total += arr[i]
        if arr[i] < min:
            min = arr[i]
        elif arr[i] > max:
            max = arr[i]

    avg = total / len(arr)
    dict = {"sumTotal": total,   "average": avg,
            "minimum": min, "maximum": max, "length": count}
    return dict


print(Ultimate([37, 2, 1, -9]))

print("*"*50)
# Reverse List


def reverseList(arr):
    reversed = []
    for i in range(len(arr) , -1, -1):
        reversed.append(arr[i])
    return reversed 
    # return arr[::-1]

print(reverseList([1, 2, 3, 4, 5]))


def reverse_list(arr):
    for i in range(0, len(arr)//2):
        x = arr[i] 
        arr[i] = arr[len(arr)-1-i] 
        arr[len(arr)-1-i] = x 
    return arr
