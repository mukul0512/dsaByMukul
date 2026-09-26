/*
write a function that returns the count of negative numbers in an array
let arr = [2, -9, 17, 0, 1, -10, -4, 8];
*/

let arr = [2, -9, 17, 0, 1, -10, -4, 8];
let count = 0;
function countNegative(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count++;
        }
    }
    return count;
}
let res = countNegative(arr);
console.log(res);