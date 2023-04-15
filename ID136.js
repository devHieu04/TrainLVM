function Single(nums)
{
    for (var i = 0; i < nums.length; i++)
    {
        var cnt = 0;
        for (var j = 0; j < nums.length; j++)
        {
            if(nums[i]===nums[j])
            {
                cnt += 1;
            }
        }
        if(cnt===1)
        {
            var g = nums[i];
            return g;
        }
       // break;
    }
}
var nums = [4,1,2,1,2];
var t = Single(nums);
console.log(t);