function transpose (matrix)
{
    var rows = matrix.length;
    var cols = matrix[0].length;
    const result = new Array(cols).fill().map(() => new Array(rows).fill(0));
    for(var i = 0; i < rows; i++)
    {
        for (var j = 0; j < cols; j++)
        {
            result[j][i] = matrix[i][j];
        }
    }
    return result;
}