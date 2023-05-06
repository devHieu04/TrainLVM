function keyRow(words)
{
    const r1 =/^[qwertyuiop]+$/i;
    const r2 =/^[asdfghjkl]+$/i;
    const r3 =/^[zxcvbnm]+$/i;
    var result = [];
    for (var word of words)
    {
        if(r1.test(word) || r2.test(word) ||r3.test(word))
        {
            result.push(word);
        }
    }
    return result;
}