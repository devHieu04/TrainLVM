function check(s1,s2)
{
    var s11 = s1.split(" ");
    const words = {};
  
    // Split s1 and s2 into arrays of words
    const s1Arr = s1.split(' ');
    const s2Arr = s2.split(' ');
    
    // Count occurrences of each word in s1
    for (const word of s1Arr) {
      words[word] = (words[word] || 0) + 1;
    }
    
    // Count occurrences of each word in s2
    for (const word of s2Arr) {
      words[word] = (words[word] || 0) + 1;
    }
    
    // Filter out words that appear more than once
    const uncommon = Object.keys(words).filter(word => words[word] === 1);
    
    return uncommon;
}