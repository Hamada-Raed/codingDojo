# Given an array of integers, find the one that appears an odd number of times.
# There will always be only one integer that appears an odd number of times.

def counter_of_odd(arr):

    count = 0
    for i in range(len(arr)):
        for j in range(len(arr)):
            if arr[i] == arr[j]:
                count += 1
        if count % 2 == 0:
            return arr[i]


print(counter_of_odd([2, 2, 2, 3, 1]))


