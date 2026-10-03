// Sum of all odd elements in an array.
let arr = [5, 2, 0, 3, 6, 7];
function sumOfOdd(n) {
    isOdd = arr[n] % 2 != 0;
    if(n == 0) return (isOdd ? arr[n] : 0);
    return (isOdd ? arr[n] : 0) + sumOfOdd(n - 1);
}

let res = sumOfOdd(arr.length - 1);
console.log(res);