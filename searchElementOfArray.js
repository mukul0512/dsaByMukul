/*
write a function that searches for an element in an array & return the index, if the element is not present then just return -1
let arr = [4, 2, 0, 10, 8, 30];
*/
let arr = [4, 2, 0, 10, 8, 30];
let target = 10;
function searchElement(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1;
}

let res = searchElement(arr, target);
console.log(res);