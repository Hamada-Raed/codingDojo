# Write a function that takes an integer as input,
# and returns the number of bits that are equal to one in the binary representation of that number.
# You can guarantee that input is non-negative.


def decToBin(num): 
    result = []
    while num >= 0:
        if (num // 2) % 2 == 0: 
            result.append('0')
            
        elif (num // 2) % 2 != 0:
            result.append('1')
    return result

print (decToBin(7)) 
