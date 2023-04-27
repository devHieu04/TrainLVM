function nextGreatestLetter(letters, target)
{
   var left = 0;
   //var minletter ="";
   var right = letters.length-1;
   while(left<=right)
   {
    var middle = Math.floor((left+right) / 2);
    if(letters[middle]>target)
    {
        right=right-1;
    }
    else
    {
       
        left=left+1;
    }
   }
   return letters[left%letters.length];
}