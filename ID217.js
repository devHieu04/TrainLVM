function containsDuplicate(nums)
{
    var cnt = 0;
    for(var i = 0; i < nums.length; i++)
    {
        for(var j = i+1; j < nums.length; j++)
        {
            if(nums[i]===nums[j])
            {
                cnt++;
            }
        }
    }
    if(cnt>0)
    {
        return true;
    }
    else
    {
        return false;
    }
}