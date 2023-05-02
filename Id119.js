/**
 * @param {number} rowIndex
 * @return {number[]}
 */

var getRow = function(rowIndex) {
    var result = [];
    for (var i = 0; i < rowIndex+1; i++) {
        var row = [];
        for (var j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                row.push(1);
            } else {
                row.push(result[i - 1][j - 1] + result[i - 1][j]);
            }
        }
        result.push(row);
    }
    var s=[];
    for (var i =0;i<result.length;i++)
    {
        if(i===rowIndex)
        {
            s=result[i];
        }
    }
    return s;
};