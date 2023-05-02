function guessNumber(n)
{
    var left = 1;
    var right =n;
    while(left<=right)
    {
        var mid = Math.floor((left+right)/2);
        var result = guess(mid);
        if(result ===0)
        {
            return mid;
        }
        else if(result ===1)
        {
            left++; 
        }
        else 
        {
            right--;
        }
    }
    return -1;
}