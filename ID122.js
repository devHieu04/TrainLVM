function LoiNhuan(prices)
{
    var result =0;
    for (var i = 0; i < prices.length; i++)
    {
        if (prices[i]<prices[i+1])
        {
            result+=prices[i+1]-prices[i];
        }
    }
    return result;
}