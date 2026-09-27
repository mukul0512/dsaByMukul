/*
write a function that returns the second largest number in an array
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
let firstLargest = -Infinity;
let secondLargest = -Infinity;
function findSecondLargest(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        }
        else if (arr[i] > secondLargest && arr[i] != firstLargest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

let res = findSecondLargest(arr);
console.log(res);