function checkRecord(s)
{
    var str ="LLL";
    if(s.includes(str))
    {
        return false;
    }
    else
    {
        var r = s.split('');
        var cnt =0;
        for(var i = 0; i < r.length; i++)
        {
            if(r[i]==='A')
            {
                cnt++;
            }

        }
        if(cnt<2)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}