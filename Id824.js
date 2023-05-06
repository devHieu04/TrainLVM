function toGoatLatin(sentence) {
    // Tách các từ trong chuỗi và lưu vào mảng
    const words = sentence.split(' ');
    // Các nguyên âm cần kiểm tra
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    // Chuỗi kết quả
    let result = '';
    // Biến đếm chỉ số từ trong câu
    let index = 1;
  
    // Duyệt qua mảng các từ
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      // Kiểm tra xem từ bắt đầu bằng nguyên âm hay phụ âm
      if (vowels.includes(word[0].toLowerCase())) {
        // Nếu từ bắt đầu bằng nguyên âm, thêm "ma" vào cuối từ
        result += word + 'ma';
      } else {
        // Nếu từ bắt đầu bằng phụ âm, chuyển đổi từ theo quy tắc
        result += word.slice(1) + word[0] + 'ma';
      }
      // Thêm số lượng chữ cái 'a' vào cuối từ tương ứng với chỉ số từ trong câu
      result += 'a'.repeat(index) + ' ';
      index++;
    }
    // Xóa dấu cách cuối chuỗi và trả về kết quả
    return result.trim();
  }
  