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

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let swap = arr[i];
                arr[i] = arr[j];
                arr[j] = swap;
            }
        }
    }
    return arr
    // return arr.sort()

}
console.log(sorter([2, 3, 1, 4, 2, 6, 7, 1, 2, 3]))

//write a function that repeat the string n times 
// example: n = 5 string = I, output = IIIII


function repeat(str, n) {

    // let newsting = '';
    // for (var i = 0; i < n; i++) {
    //     newsting = newsting + str;
    // }
    // return newsting;
    return str.repeat(2, "Hello")
}
console.log(repeat("Hello", 2))


// convert number to reversed array of digits 
//example 123 => [3,2,1]

//function takes num // empty arr // for loop num // push // reverse 
//change the number to sting 
//spilt the string to array 
//change string in array to number 
//reverse the array. 
function resversedArr(num) {
    return num.toString().split('').map((m) => Number(m)).reverse();
}
console.log(resversedArr("123"))
// console.log(typeof resversedArr("123")) 


//reverse fnuction 
//example [3,2,1] => [1,2,3] // write a function to reverse an array without build-in fnuction 
// loop in each index and swap the index 0 to index n - 1 

function reverseArr(arr) {
    for (var i = 0; i < arr.length / 2; i++) {
        let swap = arr[i]
        arr[i] = arr[arr.length - (i + 1)]
        arr[arr.length - (i + 1)] = swap
    }
    return arr
}
console.log(reverseArr([1, 2, 3, 4, 5]))

// counting sheep 
// you have an array of value true and false, count how many sheep present(true) otherwise absent
var arr = [true, false, true, false,
    true, false, true, true, true,
    false, true, false, true, false,
    false, true, true, true, false
]

function countSheep(arr) {

    // let countPresent = 0;
    // let countAbsent = 0;
    // for (var i = 0; i < arr.length; i++) {
    //     if (arr[i] == true) {
    //         countPresent += 1;
    //     }
    //     else {
    //         countAbsent += 1
    //     }
    // }

    // return countAbsent;

    let countPresent = 0;
    arr.map((n) => {
        if (n === true) countPresent++
    })
    return countPresent;

}
console.log(countSheep(arr));


// Get opposite 
// example given 1, output = -1 etc 

function opposite(num) {
    return -num
}
console.log(opposite(1))
// way to write if condition shorter 

function greet(name) {
    return name !== "Hamada" ? "Hello" + name + "!" : "Hello Hamada"
}
console.log(greet("Hamada"))


// Shorter way to write if condition 
let name = "Haada"
console.log(name !== "Hamada" ? "Fuck" : "Welcome")


// Aneedle problem 
//given an array of random element and one of them is needle find it and print the index
var arr = [
    4, "hamada", true, "needle", 6.86, "Hello"
]
function findNeedle(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "needle") {
            console.log(i)
        }
    }
}
findNeedle(arr)

/// count of positive/ sum of negative 
//write a function that return count of positive and sum of negative 
function sumAndcount(arr) {
    let result = [];
    let count = 0;
    let sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            count++
        }
        if (arr[i] < 0) {
            sum += arr[i]
        }
    }
    // result.push(count);
    // result.push(sum);
    return [count, sum];
}
console.log(sumAndcount([1, 2, 3, -1, -3, -4, -5]))


// Double char 
//example Hamada => HHaammaaddaa 
// split the string to arr 
// create empty arr 
// double the latter 
// push the latter in the empty arr
function DoubleChar(str) {
    // let arr = str.split('');
    // let result = [];
    // for (var i = 0; i < str.length; i++) {
    //     result.push(str[i] + str[i])
    // }
    // return result.join('');
    return str.split('').map((i)=> i.repeat(2)).join('')
}
console.log(DoubleChar('Hamada')); 

//write a function that does four basic methematical. (+,-,*,/)
//function takes two numbers and operarion 
// 
function operation(num1, num2, op) {
    // let result = [];
    // if (op === "+") {
    //     result = num1 + num2;
    // }
    // else if (op === "-") {
    //     result = num1 - num2;
    // }
    // else if (op === "*") {
    //     result = num1 * num2;
    // }
    // else {
    //     result = num1 / num2
    // }
    // return result; 
    return eval(num1+op+num2);



}
console.log(operation(2, 2, "/"))

//write a function that returns array of numbers that represent if the number
//=> has a square root if not return the square
//for example arr = [1,2,4,9] = > [1,4,2,3]
function square(arr){
    let result = []; 
    for(var i=0; i<arr.length; i++){
        if (Number.isInteger(Math.sqrt(arr[i]))){
            result.push(Math.sqrt(arr[i]))
        }
        else {
            result.push(arr[i]*arr[i])
        }
    }
    return result; 
} 
console.log(square([1,2,4,8,9,16]))