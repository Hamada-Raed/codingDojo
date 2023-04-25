// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. 
function TwoSum(nums, target) {
    for (var i = 0; i < nums.length; i++) {
        var sum = 0;
        if (nums[i] + nums[i + 1] == target) {
            console.log([i, i + 1]);
        }
    }
}
TwoSum([3, 2, 4], 6)


//Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists. 
function Merge(list1, list2) {
    //Input: list1 = [1,2,4], list2 = [1,3,4]
    //Output: [1,1,2,3,4,4]

    var listmerged = [];
    for (var i = 0; i < list1.length; i++) {
        for (var j = 0; j < list2.length; j++) {
            if (list1[i] == list2[j]) {
                listmerged.push(list1[i])
            }
            else if (list1[i] > list2[j]) {
                listmerged.push(list1[i])
            }
            else {
                listmerged.push(list1[i])
            }
        }
    }
}
console.log(Merge([1, 2, 4], [1, 3, 4]))

// Increment the large integer by one and return the resulting array of digits. 
// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4]. 

function Increment(digits) {
    var arr = digits.toString().split('');
    var result = [];
    if (arr[arr.length - 1] != 9) {
        digits = digits + 1
        result.push(digits)
    }
    else if (arr[arr.length - 1] == 9) {
        result[result.length] = 1
        result.push(0)

    }
    return result
}



console.log(Increment(9))

//Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
//Input: nums = [4,1,2,1,2]
// Output: 4 

function single(nums) {
    var output = nums[0]
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] == nums[i + 1]) {
            output = nums[i]
        }
        else if (nums != nums[i + 1]) {
            output = nums[i + 1]
        }
    }

    return nums
}
console.log(single[1, 1, 2])

//Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

function counter(n) {
    for (var i = n; i <= n + 2; i++) {
        console.log(i)
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

function accumlation(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(accumlation([1, 2, 3, 4]))

//Given an integer array arr and a filtering function fn, return a new array with a fewer or equal number of elements.

// Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
// Output: [20,30]
// Explanation:
// const newArray = filter(arr, fn); // [20, 30]
// The function filters out values that are not greater than 10

function filtering(arr, num) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            newArr.push(arr[i]);
        }
    }
    return newArr
}
console.log(filtering([0, 10, 20, 30], 10))

//Function Composition 
//Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
// Output: 65
// Explanation:
// Evaluating from right to left ...
// Starting with x = 4.
// 2 * (4) = 8
// (8) * (8) = 64
// (64) + 1 = 65

function Composition() {

}

//int to Roman 
//For example, 2 is written as II in Roman numeral,

let numberAndnumerals = [
    { number: 1000, roman: 'M' },
    { number: 900, roman: 'CM' },
    { number: 500, roman: 'D' },
    { number: 400, roman: 'CD' },
    { number: 100, roman: 'C' },
    { number: 90, roman: 'XC' },
    { number: 50, roman: 'L' },
    { number: 40, roman: 'XL' },
    { number: 10, roman: 'X' },
    { number: 9, roman: 'IX' },
    { number: 5, roman: 'V' },
    { number: 4, roman: 'IV' },
    { number: 1, roman: 'I' },
];

function convert(arabicNumber) {
    let romanLetter = ' ';
    for (var i = 0; i < numberAndnumerals.length; i++) {
        if (numberAndnumerals[i].number <= arabicNumber) {
            arabicNumber = arabicNumber - numberAndnumerals[i].number
            romanLetter = romanLetter + numberAndnumerals[i].roman
            i--
        }
    }
    console.log(romanLetter)

}
convert(10);


// Add Two Numbers 
// Input: l1 = [1,2,3], l2 = [1,2,3]
// Output: [2,4,6]

function addTwoNumbers(arr1, arr2) {
    var result = []
    for (var i = 0; i < arr1.length; i++) {
        let newarr = arr1[i] + arr2[i]
        result.push(newarr)
    }
    return result
}
console.log(addTwoNumbers([1, 2, 3], [1, 2, 3]))

// Add two Numbers
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.



//counter example


function count(arr) {
    var countPositives = 0;
    for (var i = 0; i < arr.length; i++) {
        countPositives++
    }
    return countPositives
}

console.log(count([3, 4, -2, 7, 16, -8, 0]));

//Code Flow - Is the Array a Palindrome 
function isPal(arr) {
    for (var left = 0; left < arr.length / 2; left++) {
        var right = (arr.length - 1) - left;

        if (arr[left] != arr[right]) {
            return "Not a pal-indrome!";
        }
    }
    return "Pal-indrome!";
}

var result1 = isPal([1, 1, 2, 2, 1]);
console.log(result1);

var result2 = isPal([3, 2, 1, 1, 2, 3]);
console.log(result2);

//Dice Roller
function d6() {
    console.log("The player rolled:" + (Math.floor(Math.random() * 5) + 1))
}
var playerRoll = d6();

//Using the following array, write a function that will answer all of our questions by randomly choosing a response

var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function randomAnswer(lifesAnswers) {
    let randomindex = Math.floor(Math.random() * 6) + 1
    console.log(lifesAnswers[randomindex])
}
randomAnswer(lifesAnswers);


var pokémon = [
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
];

//If we wanted to console.log the names of the pokémon who have an id greater than 99 we could...
for (var i = 0; i < pokémon.length; i++) {
    if (pokémon[i].id > 99) {
        console.log(pokémon[i].name);
    }
}

//console.log the pokémon objects whose id is evenly divisible by 3

for (var i = 0; i < pokémon.length; i++) {
    if (pokémon[i].id % 3 == 0) {
        console.log(pokémon[i].name);
    }
}

//console.log the pokémon objects that have more than one type
for (var i = 0; i < pokémon.length; i++) {
    if (pokémon[i].types.length > 1)
        console.log(pokémon[i].name)

}

//console.log the names of the pokémon whose only type is "poison"

for (var i = 0; i < pokémon.length; i++) {
    if (pokémon[i].types == "poison")
        console.log(pokémon[i].name)

}

//console.log the first type of all the pokémon whose second type is "flying" 

for (var i = 0; i < pokémon.length; i++) {
    if (pokémon[i].types[1] == "flying")
        console.log(pokémon[i].name)

}

// console.log the reverse of the names of the pokémon whose only type is "poison"





var arr2d = [
    [2, 5, 8],
    [3, 6, 1],
    [5, 7, 7]
];

for (var i = 0; i < arr2d.length; i++) {
    for (var j = 0; j < arr2d[i].length; j++) {
        if (arr2d[i][j] == 8) {
            console.log(i, j)
        }
    }
}

// complete the following function
function flatten(arr2d) {
    var flat = [];
    for (var i = 0; i < arr2d.length; i++) {
        for (var j = 0; j < arr2d[i].length; j++) {
            flat.push(arr2d[i][j])
        }
    }
    return flat;
}

var result = flatten([[2, 5, 8], [3, 6, 1], [5, 7, 7]]);
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]
