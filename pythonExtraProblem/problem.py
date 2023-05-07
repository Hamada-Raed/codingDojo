#  Bubble Sort. Given an array of random numbers, return the array sorted.
arr = [8, 1, 5, 3, 2, 0]*100


def BubbleSort(arr):
    count = 0
    for j in range(len(arr)-1):
        count += 1
        for i in range(len(arr)-1):

            if arr[i] > arr[i+1]:
                arr[i], arr[i+1] = arr[i+1], arr[i]
    
    print (count)
    return arr 


print(BubbleSort(arr))


