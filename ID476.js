function Stacks(n)
{
    var k =n;
    var stacks = [];
    var p=0;
    var poped=[];
    while(k!=0)
    {
        var v = k%2;
        k = parseInt(k/2);
        if(v===0)
        {
            stacks.push(1);
        }
        else
        {
            stacks.push(0);
        }
    }
    while(stacks.length)
    {
        poped.push(stacks.pop());
    }
   // return stacks;
    var r =poped.length-1;
    for(var i=0;i<poped.length;i++)
    {
        p += poped[i]*Math.pow(2,r);
        r--;
       
    }
    if(p===0)
    {
        return 0
    }else
    {
        return p;
    }
    
}
var n =5;
var t = Stacks(n);
console.log(t);