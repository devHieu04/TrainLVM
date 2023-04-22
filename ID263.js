function RemoveNum(n)
{
    // if (n >= -Math.pow(2, 31) && n <= Math.pow(2, 31) - 1) {
    //     // Thực hiện hành động khi n thỏa mãn điều kiện
    //     const factors = [];

    //     // Lặp qua các số nguyên tố từ 2 đến căn bậc hai của n
    //     // và lặp lại lần lượt chia n cho từng số đó
    //     // cho đến khi n không còn chia được nữa
    //     for (let i = 2; i <= Math.sqrt(n); i++) {
    //       while (n % i === 0) {
    //         factors.push(i);
    //         n /= i;
    //       }
    //     }
      
    //     // Nếu n > 1, tức là n còn lại là một số nguyên tố
    //     // nó cũng được thêm vào danh sách thừa số
    //     if (n > 1) {
    //       factors.push(n);
    //     }
    //     var cnt =0;
    //     for(var i=0; i<factors.length; i++) {
    //       if(factors[i]!==2&&factors[i]!==3&&factors[i]!==5)
    //       {
    //           cnt++;
    //       }
    //     }
    //     if(cnt>0)
    //     {
    //       return false;
    //     }
    //     else
    //     {
    //       return true;
    //     }
    //     } else {
    //     // Thực hiện hành động khi n không thỏa mãn điều kiện
    //     return false;
    //     }
    if (n <= 0) {
        return false;
      }
    
      while (n % 2 === 0) {
        n /= 2;
      }
      while (n % 3 === 0) {
        n /= 3;
      }
      while (n % 5 === 0) {
        n /= 5;
      }
    
      return n === 1;
}