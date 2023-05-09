my_list = [99, 4, 2, 5, -3]
my_tuple = (99, 4, 2, 5, -3)
my_str = "sequoia"
print(my_list[:])
# output: [99,4,2,5,-3]
print(my_tuple[1:])
# output: (4,2,5,-3)
print(my_str[:3])
# output: "seq"
print(my_tuple[2:4])
# output: (2,5)
print(my_list, my_tuple, my_str)
# reverse list
print(my_list[::-1])
# max
print(max(my_list))
print(max(my_tuple))
print(max(my_str))
print(sum(my_list))
print(sorted(my_list))
