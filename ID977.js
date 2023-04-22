function BinhPhuong(nums)
{
    for(var i=0; i<nums.length; i++)
    {
        nums[i] =Math.pow(nums[i],2);
    }
    var k = nums.sort(function(a,b){

        return a-b;
    });
    return k;
}