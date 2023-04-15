function Check(a,b)
{
    var cnt = b.split("").filter((c) => a.includes(c)).length;
    return cnt;
}