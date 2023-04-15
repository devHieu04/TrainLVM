function PlusOne(digits)
{
    var e = digits.join('');
    var i =+e;
    var k = parseInt(i);
    var v = k+1;
    var f = v.toString();
    var h = f.split("");
    return h; 
}
var  digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
var e = PlusOne(digits);
console.log(e);