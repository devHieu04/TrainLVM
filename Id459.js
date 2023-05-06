function repeatedSubstringPattern(s)
{
    let reg = /^(\w+)\1+$/;
    return reg.test(s);
}