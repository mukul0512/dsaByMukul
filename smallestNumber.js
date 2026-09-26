/*
Write a function that return smallest number in an array.
Case 1 // only have +ve element
arr = [5, 0, 7, 10, 8, 17, 1];
Case 2 // have -ve and +ve element
arr = [-5, 10, -10, 8, 17, -1, 8];
Case 3 // empty array
arr = []; 
Case 4 // only have one element
arr = [5];
Case 5 // only have -ve numbers 
arr = [-9, -19, -3];
Case 6 // if array have duplicate elements then count duplicate element at once
arr = [-9, -19, -3, -3, 0, 7, 8, 11, 2, 11];
Case 7 // if first element is largest
arr[0] == smallestNum;
*/
let arr = [-9, -19, -3, -3, 0, 7, 8, 11, 2, 11];
let smallestNum = Infinity;
function findSmallestNum(arr) {
    if (arr.length == 0 || arr == null) return null;
    if (arr[0] == smallestNum) return arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallestNum) {
            smallestNum = arr[i];
        }
    }
    return smallestNum;
}
let res = findSmallestNum(arr);
console.log(res);