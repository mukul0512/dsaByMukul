let arr = [7, 1, 5, 4, 3, 2];
let n = arr.length;
function selectionSort(arr) {
    for (let i = 0; i < n - 1; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    return arr;
}

let res = selectionSort(arr);
console.log(res);