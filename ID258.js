function sumDigits(num) {
    var k = num;
    var sum = 0;
    while (k != 0) {
        var v = k % 10;
        sum += v;
        k = parseInt(k / 10);

    }
    return sum;
}
function addtoDigits(num)
{
    while (num >= 10) {
        num = sumDigits(num);
      }
      return num;
}