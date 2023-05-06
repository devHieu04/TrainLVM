function plusOne(digits) {
    let carry = 1;
    for (let i = digits.length - 1; i >= 0; i--) {
      digits[i] += carry;
      carry = Math.floor(digits[i] / 10);
      digits[i] %= 10;
    }
    if (carry > 0) {
      digits.unshift(carry);
    }
    return digits;
  }
/*Khởi tạo biến carry với giá trị 1 để thực hiện phép cộng tăng dần lên một.

Duyệt mảng digits từ phần tử cuối cùng về phần tử đầu tiên. Với mỗi phần tử, ta thực hiện các bước sau:

Cộng giá trị của phần tử với carry.
Lấy phần dư của tổng đó cho 10 và gán lại vào phần tử đó.
Cập nhật giá trị của biến carry bằng phần nguyên của tổng đó chia cho 10.
Sau khi duyệt xong mảng digits, nếu carry vẫn còn giá trị khác 0, ta thêm giá trị đó vào đầu mảng.

Trả về mảng digits đã được tăng giá trị một đơn vị.

Dưới đây là một đoạn mã JavaScript cài đặt thuật toán trên: */  