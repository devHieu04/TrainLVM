var nums=[3,2,4,7,10];
var target=9;
function checkSum (nums,target)
{
    var a ,b;
    for (var i = 0; i < nums.length; i++)
    {
        for(var j = i+1; j < nums.length; j++)
        {
            if(nums[i]+nums[j]===target)
            {
                a=i;
                b=j;
            }
        }
    }
    return "["+a+","+b+"]";
}
var twosum = checkSum(nums,target);
console.log(twosum);