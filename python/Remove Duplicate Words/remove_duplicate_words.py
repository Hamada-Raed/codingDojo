def remove_duplicate_words_from(sentence):
    words_list = sentence.split(" ")
    result = []
    for word in words_list:
        # print (word)
        if word  not in result:
            result.append(word)
    
    return " ".join(result)


print (remove_duplicate_words_from("hello world hello world hello world hamdad hamdad hamdad"))