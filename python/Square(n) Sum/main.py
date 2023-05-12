# Complete the square sum function so that it squares each number passed into
# it and then sums the results together.
# [1, 2, 2] => 1 + 4 + 4 = 9 


def square_and_sum(arr): 
    sum = 0 
    for i in arr:
        sum = (i * i) + sum
        
    return sum 

print (square_and_sum([1, 2, 2, 3,4]))
        