function  isPalindrome(x)
{
    if(x<0)
    {
        return false;
    }
    else{
        var k = x.toString().split('').reverse().join('');
        if(parseInt(k)===x)
        {
            return true;
        }
        else{
            return false;
        }
    }
}
var a = isPalindrome(10);
console.log(a);