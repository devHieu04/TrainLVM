function NumberString(s)
{
    var result = s.split(" ").filter(result => result.length > 0);
    return result.length;
}