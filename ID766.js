var isToeplitzMatrix = function(matrix) {
    const numRows = matrix.length;
 const numCols = matrix[0].length;

 for (let i = 0; i < numRows - 1; i++) {
   for (let j = 0; j < numCols - 1; j++) {
     if (matrix[i][j] !== matrix[i+1][j+1]) {
       return false;
     }
   }
 }

 return true;
};