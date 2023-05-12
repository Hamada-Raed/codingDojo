# Take 2 strings s1 and s2 including only letters from a to z.
# Return a new sorted string, the longest possible,
# containing distinct letters - each taken only once - coming from s1 or s2.

def join_two_string(str1, str2):
    to_list1 = list(str1)
    to_list2 = list(str2)
    result = []
    for i in to_list1:
        result.append(i)
    for i in to_list2:
        result.append(i)
    return "".join(result)


print(join_two_string("He", "he"))
