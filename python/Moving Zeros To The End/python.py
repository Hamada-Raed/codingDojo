# Write an algorithm that takes an array and moves all of the zeros to the end,
# preserving the order of the other elements.
# move_zeros([1, 0, 1, 2, 0, 1, 3]) # returns [1, 1, 2, 1, 3, 0, 0]

def move_zeros(arr):
    count = 1
    result = []
    for i in range(len(arr)):
        if arr[i] != 0:
            result.append(arr[i])
            count += 1

    for j in range(count): 
        result.append(0)
    
    
    return result


print(move_zeros([0,1, 0,2, 0, 0, 2,3,0,33,0,0,3]))
