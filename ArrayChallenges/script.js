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
        for (var i = arr.length - 1; i >= 0 ; i--) {
            console.log(arr[i]);
        }
    return arr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]