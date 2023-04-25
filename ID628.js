function MaxProduct(nums)
{
    nums.sort((a, b) => a - b); // sắp xếp tăng dần

    const n = nums.length;
    // kiểm tra trường hợp 3 số cuối nhân lại lớn hơn hoặc bằng 2 số đầu nhân lại và 1 số cuối nhất
    const max1 = nums[n - 1] * nums[n - 2] * nums[n - 3];
    const max2 = nums[0] * nums[1] * nums[n - 1];
    return Math.max(max1, max2); 
}