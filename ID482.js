function licenseKeyFormatting(s,k)
{
    var s = s.toUpperCase();
    s = s.replace(/-/g, "");
    var n = s.length;
   var d = n % k ;
   var stacks=[];
   if(d!==0)
   {
     stacks.push(s.substring(0,d));
   }
   for (var i = d ; i < n ; i+=k)
   {
       stacks.push(s.substring(i,i+k)) ;
   }
   return stacks.join("-");
 
}
console.log(licenseKeyFormatting("5F3Z-2e-9-w",4));