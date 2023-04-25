function findErrorNums(nums) {
    for (var i = 0; i < nums.length; i++) {
        for(var j =i+1; j < nums.length; j++) {
            if(nums[i]===nums[j])
            {
                var numserr=nums[j];
            }
        }
    }
    var sum = 0;
    var sumNums=0;
    for (var i = 1; i <= nums.length; i++) {
        sum = sum+i;
        //sumNums=sumNums+nums[i];

    }
    for (var i = 0; i < nums.length; i++) {
        sumNums=sumNums+nums[i];
    }
   var numMiss=Math.abs(sum-(sumNums-numserr));
    return [numserr,numMiss];
}
var nums = [1, 2, 2, 4];
console.log(findErrorNums(nums));