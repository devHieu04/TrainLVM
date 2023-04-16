/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    if (num === 0) {
    return '0';
  }
  
  let isNegative = false;
  
  if (num < 0) {
    isNegative = true;
    num = -num;
  }
  
  let result = '';
  
  while (num > 0) {
    let remainder = num % 7;
    result += remainder;
    num = Math.floor(num / 7);
  }
  
  if (isNegative) {
    result += '-';
  }
  
  return result.split('').reverse().join('');
};