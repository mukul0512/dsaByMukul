let nums = [-20, -8, -1, 0, 5, 8, 9, 12, 15];
let target = 9;
function binarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (right >= left) {
        let middle = Math.floor((left + right) / 2);
        if (target === nums[middle]) return middle;
        else if (target < nums[middle]) {
            right = middle - 1;
        }
        else {
            left = middle + 1;
        }
    }
    return -1;
}

let res = binarySearch(nums, target);
console.log(res);