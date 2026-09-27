/*
write a function that returns the second smallest number in an array
Case 1 have +ve elements only
let arr = [4, 9, 0, 2, 8, 7, 1];
Case 2 have only one element
let arr = [4];
Case 3 empty array
let arr = [];
Case 4 have +ve and -ve elements
let arr = [-4, -9, 0, -2, -8, -7, 8];
Case 5 if array have duplicate elements then count duplicates at once.
let arr = [-4, -8, 0, 2, 8, 7, 1, 10, -10, 10];
*/

let arr = [-4, -8, 0, 2, 8, 7, 1, 10, -10, 10];
let firstSmallest = Infinity;
let secondSmallest = Infinity;
function findSecondSmallest(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < firstSmallest) {
            secondSmallest = firstSmallest;
            firstSmallest = arr[i];
        }
        else if (arr[i] < secondSmallest && arr[i] != firstSmallest) {
            secondSmallest = arr[i];
        }
    }
    return secondSmallest;
}

let res = findSecondSmallest(arr);
console.log(res);