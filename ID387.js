function firstNonRepeatingChar(s) {
    const freq = new Map();
    
    // Tính tần suất xuất hiện của từng ký tự
    for (const char of s) {
      freq.set(char, (freq.get(char) || 0) + 1);
    }
    
    // Tìm ký tự đầu tiên có tần suất xuất hiện bằng 1
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (freq.get(char) === 1) {
        return i;
      }
    }
    
    return -1; // Không có ký tự nào không lặp lại trong chuỗi
  }
  