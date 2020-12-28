/**
Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?
**/

function twoSum(arr, target) {
    var map = {};
    
    for (var i = 0; i < arr.length; ++ i) {
        var num = arr[i];
        if (map[num] === undefined) {
            map[target - num] = true;
        } else {
            return true;
        }
    }
    
    return false;
}
