// Always Hungry 
function alwaysHungry(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "food")
        {
            console.log("yummy")
        }
        else if (arr[i] != "food"){
            break;
        }
        else {
            console.log("I'm hungry")
        }
    }
}
alwaysHungry([3.14, "food", "pie", true, "food"]);

alwaysHungry([4, 1, 5, 7, 2]); 

// High Pass Filter 
function highPass(arr, cutoff) {
    var filteredArr = [];
        for (var i = 0 ; i <arr.length ; i++){
            if (arr[i] > cutoff ){
               filteredArr.push(arr[i]);
            }
        }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9] 

//Better than average
function betterThanAverage(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
        var average = sum / arr.length;
    }
    var count = 0
        for (var i = 0; i < arr.length; i++) {
            if (arr[i]  > average) {
                count ++; 
            }  
        }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); 

// Array Reverse 

function reverse(arr) {
    for (var i = 1 ; i < arr.length/2 ; i++){
        var temp = arr[i-1] // temp  = a
        arr[i-1] = arr[arr.length - i] 
        arr[arr.length - i] = temp
    }
    return arr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

//  Fibonacci numbers 
function fibonacciArray(n) {

    var fibArr = [0, 1];
    for (var i = 0 ; i < n-2 ; i++)
    fibArr.push((fibArr[i] + fibArr[i+1]))
    return fibArr;
}  
var result = fibonacciArray(10);
console.log(result); 