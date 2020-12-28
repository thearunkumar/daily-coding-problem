/**
Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?
**/

function productExceptSelf (arr) {
    var temp = 1, product = [];
    for (var i = 0; i < arr.length; ++ i) {
        product[i] = temp;
        temp *= arr[i];
    }

    temp = 1;
    for (i = arr.length - 1; i >= 0; -- i) {
        product[i] *= temp;
        temp *= arr[i];
    }
    return product;
}
