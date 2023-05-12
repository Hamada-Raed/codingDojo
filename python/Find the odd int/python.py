# Given an array of integers, find the one that appears an odd number of times.
# There will always be only one integer that appears an odd number of times.

def counter_of_odd(arr):
    count = arr[0] # count = 1
    
    for i in range(len(arr)):  # i = [0,1,2,3,4,..]
        if arr[0] == arr[i]: # if arr[0] = 1 == arr[i] == 1 
            arr[i] = count
    return count

print(counter_of_odd([2, 2, 3, 1, 1,2,2,2,2]))
