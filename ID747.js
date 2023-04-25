function dominantIndex(nums){
var max =nums[0];
var maxI=0;
for(var i = 0; i < nums.length; i++)
{
    if(nums[i] > max)
    {
        max = nums[i];
        maxI=i;
    }
}
var cnt = 0;
var r = max/2;
for(var i = 0; i < nums.length; i++)
{
    if(nums[i] >r )
    {
        cnt++;
    }
}
if(cnt-1 ===0)
{
    return maxI
}
else
{
    return -1;
}
}