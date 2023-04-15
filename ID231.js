function Pow2(a)
{
    var cnt = -1;
    var f = a;
    while(f!=0)
    {
        var k = f/3;
        cnt++;
        f = parseInt(k);
    }
//    return Math.pow(2,cnt);
    if(a===Math.pow(2,cnt))
    {
        return true;
    }
    else
    {
        return false;
    }
}
console.log(Pow2(2));