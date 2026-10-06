let arr = [7, 4, 3, 5, 1, 2];
let n = arr.length;
function insertionSort(arr) {
    for (let i = 1; i < n; i++) {
        let curr = arr[i];
        let prev = i - 1;
        while (arr[prev] > curr && prev >= 0) {
            arr[prev + 1] = arr[prev];
            prev--;
        }
        arr[prev + 1] = curr;
    }
    return arr;
}

let res = insertionSort(arr);
console.log(res);
// Time Complexity = O(n * n)
// Space Complexity = O(1)