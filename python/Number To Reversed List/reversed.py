# Given an number return it as reversed array
# for example (12345) = [5,4,3,2,1]

def convert(n):

    string = str(n)
    result = []
    for num in string:
        result.append(int(num))

    result.reverse()

    return result


print(convert(123))

#abbreviations for code 
print("&"*60)
def convert(n):
    
    
    result = []
    for num in str(n):
        result.insert(0, int(num)) # insert the number into the array with constant index and 
                                    # different values. 
    
    return result


print(convert(123))
print("&"*60)


def convert(n):
    return [int(num) for num in str(n)[::-1]]
   
print(convert(123))
