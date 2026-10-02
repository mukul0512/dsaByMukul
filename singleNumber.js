// 136. Single Number
let nums = [4, 1, 2, 1, 2];
function singleNumber(nums) {
    let hash = {};
    for (let i = 0; i < nums.length; i++) {
        if (!hash[nums[i]]) {
            hash[nums[i]] = 1;
        }
        else {
            hash[nums[i]]++;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]] == 1) {
            return nums[i];
        }
    }
}

let res = singleNumber(nums);
console.log(res);