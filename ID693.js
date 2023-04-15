function Binary(n)
{
    var k = n;
    var stacks = [];
    var poped=[];
    while(k!=0)
    {
        var v = k%2;
        stacks.push(v);
        k = parseInt(k/2);
    }
    while(stacks.length)
    {
        poped.push(stacks.pop());
    }
    var bl= true;
    for(var i=0; i<poped.length; i++)
    {
        if(poped[i]===poped[i+1])
        {
            bl=false;
            break;
        }
        else
        {
            bl=true;
        }
    }
    return bl;
}