function diff(nums1, nums2) {
    var s1 = new Set(nums1);
    var s2 = new Set(nums2);

    return [...s1].filter(element => s2.has(element));


}