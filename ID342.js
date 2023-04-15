function Pow4(n)
{
    var cnt = -1;
    var f = n;
    while(f!=0)
    {
        var k = f/4;
        cnt++;
        f = parseInt(k);
    }
//    return Math.pow(2,cnt);
    if(n===Math.pow(4,cnt))
    {
        return true;
    }
    else
    {
        return false;
    }
}