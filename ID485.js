function MaxBinary(s)
{
    var cnt =0;
    var stacks = [];
    for (var i = 0; i < s.length; i++)
    {
       
        if(s[i]===1)
        {
            cnt++;
        }
        else
        {
         stacks.push(cnt);
         cnt =0;
        }
    }
    stacks.push(cnt);
    return Math.max(...stacks);
}