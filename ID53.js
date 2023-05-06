function maxSubArray (nums)
{
    var maxEnd = nums[0];
    var maxStart = nums[0];
    for (var i = 1 ; i < nums.length; i++)
    {
       maxEnd = Math.max (maxEnd + nums[i], nums[i]);
       maxStart = Math.max (maxStart, maxEnd);
    }
   
   return maxStart;
} 
