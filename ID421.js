function an(n)
{
    var stacks=[];
    for(var i=1; i<=n; i++)
    {
        if(i%3===0&&i%5===0)
        {
            stacks.push("FizzBuzz");
        }
        else if(i%3===0)
        {
            stacks.push("Fizz");
        }
        else if(i%5===0)
        {
            stacks.push("Buzz");
        }
        else
        {
            stacks.push(i.toString());
        }
    }
    return stacks;
}