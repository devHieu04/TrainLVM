function Bits(n){
    var cnt =0;
    while(n!=0)
    {
        cnt++;
        n&=(n-1);
    }
    return cnt;
}