function LRNums(nums)
{
    var stack2=[];
    var stack1=[];
    for(var i = 0; i < nums.length; i++)
    {
        if(nums[i]%2===0)
        {
            stack2.push(nums[i]);
        }
        else
        {
            stack1.push(nums[i]);
        }
    }
    return stack2.concat(stack1);
}