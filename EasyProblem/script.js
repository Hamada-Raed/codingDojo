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