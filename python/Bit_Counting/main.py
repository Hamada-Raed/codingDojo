# Write a function that takes an integer as input,
# and returns the number of bits that are equal to one in the binary representation of that number.
# You can guarantee that input is non-negative.


# idea to convert a decimal number to binary
# decimal_num = 8, divide by 2 and take the remainder
# 8/2 = 4 and R = 0 4/2 = 2 and R = 0, 2/2 = 1 and R = 0, 1/2 = 0 and R = 1 the answer is (1000)
# (1000) = 2^3*1 + 2^2 *0 + 2^1 *0 + 2^0 * 0 = 8

def decimal_to_binary(decimal_num):
    binary_num = ''
    while type (decimal_num) is int():
        if decimal_num > 0 : 
            binary_num = '' 
            remainder = decimal_num % 2 
            decimal_num /= 2 
            binary_num += remainder
    return binary_num
print (decimal_to_binary(5))


# def decimal_to_binary(num):
#     binary_num = ""
#     while num > 0:
#         remainder = num % 2
#         binary_num = binary_num + str(remainder)
#         num = num / 2

#     return binary_num

# print (decimal_to_binary(7))

# def dec_to_binary(num): 
    
#     for i in range(num):
#         Binary_num = ""
#         if True : 
#             2**0 + 2**1 + 2**2 + 2**3 = num
#             Binary_num += str(i)
#     return Binary_num
# print (dec_to_binary(7)) 