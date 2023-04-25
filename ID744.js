function nextGreatestLetter(letters, target)
{
    var minLetter=letters[0];
    for(var i=0; i<letters.length; i++)
    {
        if(letters[i]>target)
        {
           if(letters[i]<minLetter)
           {
            minLetter=letters[i];
           }
        }
    }
    return minLetter;
    
}