function GT(n)
{
    var count = 0;
    for (var i = 5; i <= n; i *= 5) {
      count += Math.floor(n / i);
    }
    return count;
}
var gt =GT(0);
console.log(gt);