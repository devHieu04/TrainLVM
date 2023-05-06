function Libary(strs)
{
    var count =0;
    for(var i=0;i<strs[0].length;i++)
    {
        for(var j =1 ; j<strs.length;j++)
        {
            if(strs[j][i]<strs[j-1][i])
            {
                count++;
                break;
            }
        }
    }
    return count;
}