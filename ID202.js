function sumOfSquares(n) {
    let sum = 0;
    while (n > 0) {
      const digit = n % 10;
      sum += digit * digit;
      n = Math.floor(n / 10);
    }
    return sum;
  }
  var isHappy = function(n) {
     if(n<4)
      {
          return n*n ===1;
      }
      else
      {
          while(n>=10)
          {
            n=sumOfSquares(n);
          }
      }
      return n===1||n===7;
  };