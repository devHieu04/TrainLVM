function Insert(nums, target)
{
    var k =-1;
    for (var i = 0; i < nums.length; i++)
    {
        if(nums[i] === target)
        {
            k=i;
        }
    }
    if(k<0)
    {
        nums.push(target);
    }
    else
    {
        return k;
    }
    var s = nums.sort(function(a, b)
    {
        return a-b;
    });
    for (var i = 0; i < s.length; i++)
    {
        if(s[i] === target)
        {
            return i;
        }
    }
}
var nums=[1,3,5,6];
var target=2;
var a = Insert(nums,target);
console.log(a);