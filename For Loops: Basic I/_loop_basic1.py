# Basic - Print all integers from 0 to 150.

for i in range(0, 151, 1):
    print(i)

# Multiples of Five - Print all the multiples of 5 from 5 to 1,000
print("*"*50)

for i in range(5, 1005, 5):
    print(i)

# Counting, the Dojo Way - Print integers 1 to 100. If divisible by 5, print "Coding" instead. If divisible by 10, print "Coding Dojo".
print("*"*50)

for i in range(1, 101, 1):
    if i % 5 == 0:
        print("Coding")
    if i%10 == 0:
        print("Coding Dojo")
        
print("*"*50)

# Whoa. That Sucker's Huge - Add odd integers from 0 to 500, 000, and print the final sum.
sum = 0; 
for i in range(0, 500001, 1):
    if i%2 != 0:
        sum += i;
print(sum);


print ("*"*50); 
# Countdown by Fours - Print positive numbers starting at 2018, counting down by fours.
for i in range(2018, 0 , -4):
    print (i)
    
print ("*"*50)

lowNum, highNum, mult = 2,9,3 
for i in range(lowNum, highNum+3, 1): 
    if i % mult == 0: 
        print (i)
 
