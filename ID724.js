function pivotIndex(nums)
{
    var leftSum = 0;
    var rightSum = nums.reduce((acc, cur) => acc + cur, 0);
    for (var i = 0; i < nums.length; i++) {
      if (leftSum === rightSum - nums[i]) {
        return i;
      }
      leftSum += nums[i];
      rightSum -= nums[i];
    }
    return -1;
    
}