// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. 
function TwoSum(nums, target){
    for (var i = 0; i < nums.length; i++) {
        var sum = 0; 
        if (nums[i]+nums[i+1] == target){
            console.log([i, i+1]);
        }
    }
}
TwoSum([3,2,4], 6) 


//Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists. 
function Merge(list1,list2){
    //Input: list1 = [1,2,4], list2 = [1,3,4]
    //Output: [1,1,2,3,4,4]

    var listmerged = [];
    for (var i = 0; i < list1.length; i++) {
        for (var j = 0; j < list2.length; j++) {
            if (list1[i] == list2[j]){
                listmerged.push(list1[i])
            }
            else if (list1[i] > list2[j]){
                listmerged.push(list1[i])
            }
            else {
                listmerged.push(list1[i])
            }
        } 
    } 
}
console.log (Merge([1,2,4],[1,3,4]))

// Increment the large integer by one and return the resulting array of digits. 
// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4]. 

function Increment(digits){
    var arr = digits.toString().split('');
    var  result = [];
    if (arr[arr.length -1] != 9 ){
        digits = digits + 1
        result.push(digits)
    }
    else if (arr[arr.length -1 ] == 9) {
        result[result.length] = 1 
        result.push(0)         

        }
        return result
    }
    


console.log (Increment(9)) 

//Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
//Input: nums = [4,1,2,1,2]
// Output: 4 

function single(nums){
    var output = nums[0]
    for (var i = 0; i < nums.length; i++){  
        if (nums[i] == nums[i+1]){
            output = nums[i]
        }
        else if (nums != nums[i+1]){
            output = nums[i+1]
        }
    }
    
    return nums
}
console.log (single[1,1,2])

//Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

function counter(n){
    for (var i = n ; i <= n+2 ; i++){
        console.log (i)
    }
}
counter(10);


//Given an integer array nums, a reducer function fn, and an intial value init, return a reduced array.
Input: 
// nums = [1,2,3,4]
// fn = function sum(accum, curr) { return accum + curr; }
// init = 0
// Output: 10
// Explanation:
// initially, the value is init=0.
// (0) + nums[0] = 1
// (1) + nums[1] = 3
// (3) + nums[2] = 6
// (6) + nums[3] = 10
// The final answer is 10.

function accumlation(arr){
    var sum = 0; 
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(accumlation([1,2,3,4])) 

//Given an integer array arr and a filtering function fn, return a new array with a fewer or equal number of elements.

// Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
// Output: [20,30]
// Explanation:
// const newArray = filter(arr, fn); // [20, 30]
// The function filters out values that are not greater than 10

function filtering(arr, num){
    var newArr = [];    
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > num){
            newArr.push(arr[i]);
        }
    }
    return newArr
}
console.log(filtering([0,10,20,30],10))

//Function Composition 
//Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
// Output: 65
// Explanation:
// Evaluating from right to left ...
// Starting with x = 4.
// 2 * (4) = 8
// (8) * (8) = 64
// (64) + 1 = 65

function Composition(){
    
}

//int to Roman 
//For example, 2 is written as II in Roman numeral,

let numberAndnumerals =  [ 
    { number: 1000, roman : 'M'}, 
    { number: 900, roman : 'CM'},
    { number: 500, roman : 'D' }, 
    { number: 400, roman : 'CD'},
    { number: 100, roman : 'C' }, 
    { number: 90, roman : 'XC' },
    { number: 50, roman : 'L'  }, 
    { number: 40, roman : 'XL' },
    { number: 10, roman : 'X'  }, 
    { number: 9, roman : 'IX'  },
    { number: 5, roman : 'V'   }, 
    { number: 4, roman : 'IV'  },
    { number: 1, roman : 'I'   },
];

function convert(arabicNumber){
    let romanLetter = ' '; 
    for (var i = 0; i <numberAndnumerals.length; i++) {
        if (numberAndnumerals[i].number <= arabicNumber ){
            arabicNumber = arabicNumber  - numberAndnumerals[i].number
            romanLetter = romanLetter + numberAndnumerals[i].roman
            i--
        }
    } 
    console.log(romanLetter)

}
convert(10);

