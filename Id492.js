function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  var constructRectangle = function(area) {
    if(isPrime(area))
    {
        return [area , 1];
    }
    else if(area===1)
    {
        return [1,1];
    }
    let width = 1;
    let length = area;
    let minDiff = area - 1;
  
    for (let i = 2; i <= Math.sqrt(area); i++) {
      if (area % i === 0) {
        width = i;
        length = area / i;
        if (length - width < minDiff) {
          minDiff = length - width;
          result = [length, width];
        }
      }
    }
  
    return result;
  };