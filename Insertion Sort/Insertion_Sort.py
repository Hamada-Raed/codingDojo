def InsertionSort(arr):

    for i in range(1, len(arr)): # i = 1

        temp = arr[i] #arr[1]
        j = i-1  #j=0 
        while j >= 0 and temp < arr[j]: # temp < arr[0]
            arr[j+1] = arr[j] #arr[1] = arr[0]
            j -= 1 #=> j=-1
        arr[j+1] = temp #=> arr[1] = arr[1]
    return arr

arr = [10, 5, 13, 8, 2]
print(InsertionSort(arr))
