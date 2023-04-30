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
    return str.split('').map((i) => i.repeat(2)).join('')
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
    return eval(num1 + op + num2);



}
console.log(operation(2, 2, "/"))

//write a function that returns array of numbers that represent if the number
//=> has a square root if not return the square
//for example arr = [1,2,4,9] = > [1,4,2,3]
function square(arr) {
    let result = [];
    for (var i = 0; i < arr.length; i++) {
        if (Number.isInteger(Math.sqrt(arr[i]))) {
            result.push(Math.sqrt(arr[i]))
        }
        else {
            result.push(arr[i] * arr[i])
        }
    }
    return result;
}
console.log(square([1, 2, 4, 8, 9, 16]))

//count by x 
// write a function takes two parameter and  returns array of number that time x by n
//example f(x,n)= f(1,10) = 1,2,3,4,5,6,7,8,9,10
//example f(x,n) = f(2,5) = 2,4,6,8,10 
function times(x, n) {
    let result = [];
    for (var i = 1; i <= n; i++) {
        result.push(x * i)
    }
    return result;

}
console.log(times(1, 10))

//Remove string spaces 

function removeSpaces(str) {
    return str.split(" ").join("")
}
console.log(removeSpaces("H a m a d a asdf asdfasdf asdfasf"))


// inverse function 
// Given a set of numbers return set of inverse of numbers
// example [1,2,3,-1,-2] => [-1,-2,-3,1,2]

function inverse(arr) {
    // let result = [];
    // for (var i = 0; i < arr.length; i++) {

    //     result.push(-1 * arr[i])

    // }
    // return result
    return arr.map((i) => -i)
}
console.log(inverse([3, -1, -2]))

//convert boolean value to string 
//for example [true, false] => [yes, no]

function booleanToString(bool) {
    // if (bool == "True"){
    //     console.log("YES");
    // }
    // else {
    //     console.log("NO");
    // }
    return bool == " True" ? "YES" : "NO";
}
booleanToString("True");


// Reversing words in a string 
// for example [Hi there] =? [there Hi] 

function reverseWords(str) {
    return str.split(" ").reverse().join(" ")
}
console.log(reverseWords("hi there"))


// calculate average 
function average(arr) {
    let sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum / arr.length;
}

console.log(average([1, 2, 3, 4, 5]));


function switchTostring(num) {
    switch (num) {
        case 1: return "one";
            break;
        case 2: return "Two";
            break;
        case 3: return "Three";
            break;
        case 4: return "Four";
            break;
        case 5: return "Five";
            break;
        case 6: return "Six";
            break;
        case 7: return "Seven";
            break;
        case 8: return "Eight";
            break;
        case 9: return "Nine";
            break;
        case 0: return "Zero";
            break;

        default:
            return "Wrong number";

    }
}
console.log(switchTostring(4))

// Do I get a bouns 
//write a function that takes two arguments salary and bouns if the bouns is true multiple salary by 0.1 if 
// if false print a massage no bouns try in another time 

function bouns(salary, bool) {
    let total = 0;
    if (bool == true) {
        total = salary + (salary * 0.1);
    }
    else {
        total = salary
        console.log("no bouns, try in another time ");
    }
    return total
}
console.log(bouns(1100, false))

// romove the last digit in the string
//for example if ! in hi!!! => hi!!

function romoveSymbol(string) {
    return string.replace(/!$/, "") // /symbol$/ is a regular expression. 

}
console.log(romoveSymbol("Hi!!!$!"))

//volume of cube 
function volumeofCube(x,y,z) 
{
    return x*y*z; 
}
console.log(volumeofCube(3,4,5)) 


// round number 
function round(num) {
  return num.toFixed(2)
}
console.log(round(4.44444))

