// 485. Max Consecutive Ones
let nums = [1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1];
function findMaxConsecutiveOnes(nums) {
    let currCount = 0;
    let maxCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            currCount++;
        }
        else {
            maxCount = Math.max(currCount, maxCount);
            currCount = 0;
        }
    }
    return Math.max(maxCount, currCount);
}

let res = findMaxConsecutiveOnes(nums);
console.log(res);