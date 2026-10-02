// 136. Single Number

let nums = [4, 1, 2, 1, 2];
function singleNumber(nums) {
    let xor = 0;
    for(let i = 0; i < nums.length; i++) {
        xor = xor ^ nums[i];
    }
    return xor;
}

let res = singleNumber(nums);
console.log(res);