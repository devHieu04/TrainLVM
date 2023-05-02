function PefectNum(num)
{
   var x = num;
   while(x*x>num)
   {
      x= Math.floor((x+num/x)/2);

   }
   return x*x==num;
}