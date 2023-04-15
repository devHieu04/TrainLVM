function Kid(s,e)
{
   // var stacks =[];
    const max = Math.max(...s);
   var k =  s.map(function(candies)
    {
        if(candies+e>=max)
       {
        return true;
       }
       else
       {
        return false;
       }
    })
   return k;

}
var candies = [2,3,5,1,3];
 var extraCandies = 3;
var e = Kid(candies,extraCandies);
console.log(e);