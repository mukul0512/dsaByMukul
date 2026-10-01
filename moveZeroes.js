// 283 Move Zeroes
let nums = [0, 1, 0, 3, 12];
function moveZeroes(nums) {
    let p1 = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[p1] = nums[i];
            p1++;
        }
    }
    // fill all the remailing elements to zero
    for (let i = p1; i < nums.length; i++) {
        nums[i] = 0;
    }
    return nums;
}

let res = moveZeroes(nums);
console.log(res);