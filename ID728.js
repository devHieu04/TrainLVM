function selfNum(l,r)
{
    var stacks = [];
   
    for(var i =l ; i<r+1;i++)
    {
        var k =i;
        var cnt=0;
        var count=0;
        while(k!=0)
        {
            var v =k%10;
            k=parseInt(k/10);
            count++;
            if(i%v===0)
            {
                cnt++;
            }
            else
            {
                break;
            }
        }
        if(count===cnt)
        {
            stacks.push(i);
        }
    }
    return stacks;
}