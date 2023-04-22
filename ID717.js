function checkBits(bits)
{
    var i = 0;
    while (i < bits.length-1)
    {
        if (bits[i]===1)
        {
            i=i+2;
        }else
        {
            i=i+1;
        }
    }
    return i===bits.length-1;
}