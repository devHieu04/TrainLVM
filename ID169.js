function majorVersion(nums) {
    const counter = {};
    const k = nums.length / 2;

    for (let num of nums) {
        counter[num] = (counter[num] || 0) + 1;
        if (counter[num] > k) {
            return num;
        }
    }
}