function longestPalindrome(s)
{
    const count = new Map();
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    if (count.has(char)) {
      count.set(char, count.get(char) + 1);
    } else {
      count.set(char, 1);
    }
  }
  
  let hasOdd = false;
  let length = 0;
  for (const [char, charCount] of count.entries()) {
    if (charCount % 2 === 0) {
      length += charCount;
    } else {
      hasOdd = true;
      length += charCount - 1;
    }
  }
  
  if (hasOdd) {
    length += 1;
  }
  
  return length;
}
console.log(longestPalindrome("ccc"));