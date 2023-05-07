# Selection sort works by iterating through the list,
# finding the minimum value, and moving it to the beginning of the list.
# Then, ignoring the first position, which is now sorted,
# iterate through the list again to find the next minimum value and move it to index 1.
# How to find the minimum value. 
# def minvalue(arr):
#     min = arr[0]
#     for i in range(len(arr)):
#         if arr[i] < min:
#             min = arr[i]
#     return min


# print(minvalue([1, 2, 3, 0]))
def sort (arr) :
        for i in range(len(arr)):
            for j in range(len(arr)): 
                if arr[i] < arr[j]:
                    swap = arr[i]
                    arr[i] = arr[j]
                    arr[j] = swap
        
        return arr

# def selectionSort(arr):
#     for i in range(len(arr)): // i = 0,1,2,3,4, ... 
#         min_index = i #index
#         for j in range(i+1, len(arr)):
#             # select the minimum element in every iteration
#             if arr[j] < arr[min_index]:
#                 min_index = j
#          # swapping the elements to sort the array
#         (arr[i], arr[min_index]) = (arr[min_index], arr[i])
#     return (arr),

# arr = [-2, 45, 0, 11, -9, 88, -97, -202, 747]
# print(selectionSort(arr))
