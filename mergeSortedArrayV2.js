// 88 Merge Sorted Array
let nums1 = [2, 5, 6, 0, 0, 0];
let nums2 = [1, 2, 3];
let m = 3;
let n = 3;
function mergeSortedArray(nums1, m, nums2, n) {
    let p1 = m - 1;
    let p2 = n - 1;
    for(let i = m + n - 1; i >= 0; i--) {
        if(p2 < 0) {
            break;
        }
        if(p1 > 0 && nums1[p1] > nums2[p2]) {
            nums1[i] = nums1[p1];
            p1--;
        }
        else {
            nums1[i] = nums2[p2];
            p2--;
        }
    }
    return nums1;
}

let res = mergeSortedArray(nums1, m, nums2, n);
console.log(res);