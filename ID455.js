function findContentChildren (g,s)
{
    var g1 = g.sort((a,b)=>a-b);
    var s1 = s.sort((a,b)=>a-b);
    var i = 0;
    var j = 0;
    var cnt = 0;
    while (i < g1.length&&j < s1.length)
    {
        if (s1[j]>=g1[i])
        {
            cnt++;
            i++;
        }
        j++;
    }
    return cnt;
}