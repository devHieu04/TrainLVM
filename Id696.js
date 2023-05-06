function countBinary(s) {
    let count = 0;
    let prevCount = 0;
    let currCount = 1;
    
    for (let i = 1; i < s.length; i++) {
      if (s[i] === s[i-1]) {
        currCount++;
      } else {
        prevCount = currCount;
        currCount = 1;
      }
      if (prevCount >= currCount) {
        count++;
      }
    }
    
    return count;
}
