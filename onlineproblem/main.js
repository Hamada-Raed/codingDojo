// even- odd number 
// first way 
function evenOdd(num) {
    if (num % 2 == 0) {
        console.log("even")
    } else {
        console.log("odd")
    }
}
evenOdd(5)
//second way 
function evenOdd(num) {
    if (num % 2 == 0) {
        return "Even"
    } else {
        return "Odd"
    }
}
console.log(evenOdd(5))

//shorter way 

function evenOdd(num) {
    return num % 2 == 0 ? "Even" : "Odd "
}
console.log(evenOdd(5))

// Given a array of numbers, returns sum of positive numbers. 
// given [1,-2,4] return 1 + 4 = 5
//*
function sumOfPositive(arr) {
    //build in fnuction
    return arr.filter(x => x > 0).reduce((acc, current) => acc + current, 0) // reduce (acc,current, index ,arr) to
    // human fnuction
    // let inivalue = 0
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] > 0) {
    //         inivalue += arr[i]
    //     }
    // }
    // return inivalue;
}
console.log(sumOfPositive([-1, 2, 3]))

//Given a array of numbers, write a function that returns sum of all numbers except the smallest one and largest one 
//* 
function sumarray(arr) {
    // let maxValue = Math.max(...arr)
    // let minValue = Math.min(...arr)
    // let filteredArray = arr.filter((x)=> x !== minValue && x !== maxValue)
    // let newArray = filteredArray.reduce((acc,current) => acc + current, 0) 
    // return newArray  

    // return arr.filter((x)=> x!== Math.max(...arr) && x!== Math.min(...arr))
    // .reduce((acc,current)=> acc + current, 0) 

    return arr.sort((a, b) => a - b).slice(1, -1)
        .reduce((acc, current) => acc + current, 0)
}
console.log(sumarray([1, 2, 3, 4]));

// Given  a array of numbers, write a function that sort the array  without using built-in function 

//swap function

function sorter(arr) {
    var done = false, swapped; 

while (!done) {
    swapped = 0;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i-1] > arr[i]) {
            var swap = arr[i-1]
            arr[i-1] = arr[i]
            arr[i] = swap
        }
    } 
}
    return arr
}
console.log(sorter([3, 2, 1])) 