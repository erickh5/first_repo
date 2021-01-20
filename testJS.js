let arr1 = [1, 3];
let arr2 = [2];

var findMedianSortedArrays = function (nums1, nums2) {
    let ans = 0;
    i = 0;
    j = 0;
    let mergedArr = [];
    while (i < nums1.length && j < nums2.length) {
        if (i < nums1.length && !(j < nums2.length)) {
            let tempArr = nums1.slice(i);
            mergedArr.push(...tempArr);
            i = nums1.length;
        } else if (!(i < nums1.length) && j < nums2.length) {
            let tempArr = nums2.slice(j);
            mergedArr.push(...tempArr);
            j = nums2.length;
        } else {
            if (nums1[i] > nums2[j]) mergedArr.push(nums1[i++]);
            else mergedArr.push(nums2[j++]);
        }
    }
    if (mergedArr.length % 2 === 0) ans = mergedArr[mergedArr.length / 2];
    else {
        let a = mergedArr[(mergedArr.length + 1) / 2 - 1];
        let b = mergedArr[(mergedArr.length + 1) / 2];
        ans = a + b / 2;
    }
    return ans;
};

console.log(findMedianSortedArrays(arr1, arr2));

console.log("Hello World");
