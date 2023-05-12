# You are going to be given a word.
# Your job is to return the middle character of the word.
# If the word's length is odd, return the middle character.
# If the word's length is even, return the middle 2 characters.

def middle(string):
    # convert string to list
    to_list = list(string)
    length = len(to_list)

    if length % 2 != 0:
        print(to_list[length//2])

    elif length % 2 == 0:
        print(f"{to_list[length//2 -1]}{to_list[length//2]}")


(middle("test"))
