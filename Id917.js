function reversLetter(s)
{
    let left = 0;
  let right = s.length - 1;
  const result = s.split(''); // Chuyển chuỗi thành mảng để có thể thay đổi các kí tự

  while (left < right) {
    const isLeftLetter = /[a-zA-Z]/.test(result[left]); // Kiểm tra xem kí tự ở vị trí left có phải là chữ cái không
    const isRightLetter = /[a-zA-Z]/.test(result[right]); // Kiểm tra xem kí tự ở vị trí right có phải là chữ cái không

    if (isLeftLetter && isRightLetter) {
      // Nếu cả hai kí tự đều là chữ cái thì ta swap chúng
      [result[left], result[right]] = [result[right], result[left]];
      left++;
      right--;
    } else if (isLeftLetter) {
      // Nếu chỉ có kí tự ở vị trí left là chữ cái thì ta di chuyển right về bên trái
      right--;
    } else {
      // Nếu chỉ có kí tự ở vị trí right là chữ cái thì ta di chuyển left về bên phải
      left++;
    }
  }

  return result.join('');
}