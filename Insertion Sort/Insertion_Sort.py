def InsertionSort(arr):

    for i in range(1, len(arr)): # i = 1

        temp = arr[i]
        j = i-1
        while j >= 0 and temp < arr[j]:
            arr[j+1] = arr[j]
            j -= 1
        arr[j+1] = temp
    return arr

arr = [10, 5, 13, 8, 2]
print(InsertionSort(arr))
