function ballgame(operations)
{
   const rg = /^-?\d+$/;
   var result = [];
   for (var i = 0; i < operations.length; i++)
   {
    if(rg.test(operations[i]))
    {
        result.push(parseInt(operations[i]));
    }
    else if(operations[i]=== "+")
    {
        result.push(result[result.length-1] + result[result.length-2]);
    }
    else if(operations[i]==="D")
    {
        result.push(result[result.length-1] * 2);
    }
    else if(operations[i]==="C")
    {
        result.pop();
    }
   }
   return result=result.reduce((a,b)=>a+b,0);
}
console.log(ballgame(["5","2","C","D","+"]));