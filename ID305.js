function sameNumber(nums1, nums2){
  var  num1=nums1.sort((a,b)=>a-b);
  var num2 = nums2.sort((a,b)=>a-b);
  var i =0 ; var j =0 ;
  var result =[];
  while(i<num1.length&&j<num2.length)
  {
    if(num1[i]<num2[j])
    {
        i++;
    }else if(num1[i]>num2[j])
    {
        j++;
    }
    else
    {
        i++;
        j++;
        result.push(num1[i]);
    }
  }
  return result;
}