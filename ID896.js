function isIncreasing(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i+1]) {
        return false;
      }
    }
    return true;
  }
  function isDecreasing(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < arr[i+1]) {
        return false;
      }
    }
    return true;
  }
  
  var isMonotonic = function(arr) {
      if(isIncreasing(arr))
      {
        return true;
      }
      else if(isDecreasing(arr))
      {
        return true;
      }
      else
      {
        return false;
      }
      
  };