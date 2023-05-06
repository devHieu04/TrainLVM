function coin(n)
{
    var k = Math.floor(Math.sqrt(2*n));
    if (k*(k+1)<=2*n)
    {
        return k;
    }
    else
    {
        return k -1;
    }
}