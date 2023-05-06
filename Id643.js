function AVG(nums,k){
    var sum =0;
    for(var i =0;i<k;i++)
    {
        sum+=nums[i];
    }
    var maxAVG = sum/k;
    for(var j = k ; j<nums.length;j++)
    {
        sum+=nums[j]+nums[j-k];
        maxAVG = Math.max(maxAVG,sum/k);
    }
    return maxAVG;
}