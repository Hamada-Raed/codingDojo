def longest_word_in(sent):
    count = 0
    words_list = sent.split(" ")

    for word in words_list:
        if len(word) > count: 
            count = len(word)
            longest = word
    
    return longest


print(longest_word_in("In programming language we love you so much"))
