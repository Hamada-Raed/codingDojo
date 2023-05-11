

def avg(arr):
    sum = 0
    for i in arr:
        sum += i

    avg = sum / len(arr)

    print(round(avg, 5))


(avg([1.333, 2.334, 3.0033]))
