function isPrime(num) {
    for (var i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num !== 1;
}
  function Binary(n){
    var binary ='';
    var cnt =0;
    
    while(n>0)
    {
        binary+=n%2;
        n=Math.floor(n/2);
    }
    for (var i =0; i<binary.length;i++)
    {
        if (binary.charAt(i)=='1')
        {
            cnt++;
        } 
    }
    return cnt;
  }
   function countPrimeSetBits(left , right)
   {
     var stacks=[];
     var count  =0;
    for (var i =left ; i<=right;i++ )
    {
        stacks.push(Binary(i));
    }
    for (var i =0;i<stacks.length;i++)
    {
        if (isPrime(stacks[i]))
        {
            count ++;
        }
    }
    return count;
   }