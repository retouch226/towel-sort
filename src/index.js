const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
module.exports = function towelSort(matrix) {
    if (matrix != null) {
        let array = [];
        for (let i = 0; i < matrix.length; i++) {
            if (i % 2 === 0) {
                for (j = 0; j < matrix[i].length; j++) {
                    array.push(matrix[i][j]);
                }
            }
            if (i % 2 !== 0) {
                for (j = matrix[i].length - 1; j >= 0; j--) {
                    array.push(matrix[i][j]);
                }
            }
        }

        return array;
    }
    return [];
};

//console.log(towelSort(matrix));
