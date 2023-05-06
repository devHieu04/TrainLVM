function convers16(num)
{
    if(num===0)
    return "0";
    if(num<0)
    num = 0xffffffff + num + 1;
    var charshex = "0123456789abcdef";
    var result="";
    while(num>0)
    {
        var digits = num%16;
        result = charshex[digits]+result;
        num = Math.floor(num/16);
    }
    return result;

}