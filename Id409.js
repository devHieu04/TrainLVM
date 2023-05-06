function longestPalindrome(s)
{
    var chars = s.split('');
    var stackchan=[];
    var stackle=[];
    for (var i=0; i<chars.length; i++)
    {
        var cnt =0;
        for (var j =0;j<chars.length;j++)
        {
            if (chars[i]===chars[j])
            {
                cnt++;
            }
        }
        if(cnt%2===0)
        {
            stackchan.push(chars[i]);
        }
        else
        {
            stackle.push(chars[i]);
        }
    }
    var maxLe = 0;
    
    for (var i=0; i<stackle.length; i++)
    {
        var count =0;
        for(var j =0 ; j < stackle.length ;j++)
        {
            if(stackle[i]===stackle[j])
            {
                count++;
            }
        }
        if (count > maxLe)
        {
            maxLe = count;
           
        }
    }
    return maxLe + stackchan.length;
}
console.log(longestPalindrome("ccc"));