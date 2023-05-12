# It's pretty straightforward. Your goal is to create a
# function that removes the first and last characters of a string.
# You're given one parameter, the original string.
# You don't have to worry with strings with less than two characters.


def reomve_f_l_char_from_string(string):
    # convert string to array

    to_array = list(string)
    to_array.pop(0)
    to_array.pop(len(to_array)-1)
    return " ".join(to_array) 

        


print(reomve_f_l_char_from_string("Hello"))


# to split a string into array by using for loop
# string = "Hello"
# result = []
# for i in string:
#     result.append(i)

# print(result)
