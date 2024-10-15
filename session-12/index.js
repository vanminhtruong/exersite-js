function findMedianSortedArrays(nums1, nums2) {

    const merged = [...nums1, ...nums2].sort((a, b) => a - b);
    console.log("Mảng khi gộp: "+merged);
    const length = merged.length;

    if (length % 2 === 0) {
        return (merged[length / 2 - 1] + merged[length / 2]) / 2;
    } else {
        return merged[Math.floor(length / 2)];
    }
}

// Ví dụ sử dụng
console.log(findMedianSortedArrays([1, 3], [2])); 
console.log(findMedianSortedArrays([1, 2], [3, 4]));
