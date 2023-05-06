function reverseVowels(s)
{
    const nguyenam =['a','i', 'u','e','o','A','I','U','E','O'];
    var left = 0;
    var arr = s.split('');
    var right = arr.length-1
    while(left < right)
    {
        while(left < right && !nguyenam.includes(arr[left]))
        {
            left++;
        }
        while(left < right &&!nguyenam.includes(arr[right]))
        {
            right--;
        }
        var temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    return arr.join('');
}