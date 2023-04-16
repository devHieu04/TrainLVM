function  MissingNum(nums)
{
    var n = nums.length;
    var sum =((n + 1) * n) / 2;
    var result=0;
  for (let i = 0; i < nums.length; i++) {
    result += nums[i];
  }
  return sum-result;
}