function isString(s1,s2)
{
    var l1 = s1.length;
    var l2 = s2.length;
    for(var i = 0; i <= l2-l1; i++)
    {
        var j =0;
        while(j<l1&&s2[i+j]===s1[j])
        {
            j++;
        }
        if(j===l1)
        {
            return true;
        }
    }
    return false;
}
console.log(isString("he","hello"));
// console.log("hello world");