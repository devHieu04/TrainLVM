function titleColums (columnTitle)
{
    var result = 0;
    for(var i = 0; i < columnTitle.length; i++)
    {
        var code = columnTitle.charCodeAt(i)-64;
        result = result*26+code;
    }
    return result;
}