function RevrseNumber(x) {
            if (x < 0) {
            var k = Math.abs(x);
            var v = k.toString().split('').reverse().join('');
            var s = -1 * parseInt(v);
            if(s < -2147483648 || s > 2147483647)
            {
                return 0;
            }
            else
            {
                return s;
            }
            
        }
        else {
            var h = x.toString().split('').reverse().join('');
           
            if(parseInt(h) < -2147483648 || parseInt(h)> 2147483647)
            {
                return 0;
            }
            else
            {
                return parseInt(h);
            }
        }

}
var a = 1534236469;
var b = RevrseNumber(a);
console.log(b);