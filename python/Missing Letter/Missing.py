
import string

# print (dir(string))
# print(string.ascii_lowercase)


def find_missing_letter_in(givenLetter):
    alpha = string.ascii_lowercase
    start = alpha.index(givenLetter)
    for letter in alpha[start:]:
        if letter not in givenLetter:
            return letter

    return "No missing letter"


print(find_missing_letter_in("s"))
