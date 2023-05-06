function ReshapeMatrix(mat, r,c)
{
    var row = mat.length;
    var col = mat[0].length;
    if(row*col!==r*c)
    {
        return mat;
    }
    var k = 0;
    var f = 0;
    var rsl = new Array(r).fill(0).map(() => new Array(c).fill(0));
    for (var i =0;i<r; i++)
    {
        for (var j = 0; j < c; j++)
        {
           rsl[i][j]=mat[Math.floor(k/col)][k%col];
           k++;
        }
    }
    return rsl;
    
}