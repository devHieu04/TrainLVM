function Randomnote(s1,s2)
{
    var chars = s2.split('');
    for (const ch of s1)
    {
        var index = chars.indexOf(ch);
        if (index == -1)
        {
            return false;
        }
        chars.splice(index,1);
    }
    return true;
}