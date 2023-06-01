import pandas
import numpy
import matplotlib.pyplot as plt

x = pandas.read_csv("numbers.csv")
numbers = x["Numbers"].tolist()
# arr=[]

# for i in range(1,len(numbers)+1):
#     arr.append(i)

sin_values= numpy.sin(numbers)
# e_values = numpy.log(numbers)

# plt.plot(numbers, sin_values, label = "sine")
# plt.xlabel("Numbers")
# plt.ylabel("Values")
# plt.title("Sin of Numbers ")
# plt.legend()
# plt.show()

# plt.plot(arr, e_values, label = "log")
# plt.xlabel("Numbers")
# plt.ylabel("Values")
# plt.title("log of Numbers ")
# plt.legend()
# plt.show()