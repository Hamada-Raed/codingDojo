def remove_char_from (word , c) : 
    word_without_char = [] 
    for char in word :
        if char != c.lower() and char != c.upper(): 
            word_without_char.append(char) 
    
    return "".join(word_without_char)

print (remove_char_from('HEllo Hamada, how are you' , 'e'))

print ("&"*100)
#by filter
def remove_char_from(word, c):
    result = filter(lambda x : x != c.lower() and x != c.lower(), word)
    return "".join(result)

print(remove_char_from('HEllo Hamada, how are you', 'e'))

