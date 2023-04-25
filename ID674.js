function findLengthOfLCIS(nums)
{
    var cnt =1;
    var maxLength =0;
    for(var i = 0; i < nums.length; i++)
    {
       if(nums[i]<nums[i+1])
       {
        cnt++;
       }
       else
       {
    
        maxLength = Math.max(maxLength,cnt);
        cnt =1;
     }
    }
    return maxLength;
}