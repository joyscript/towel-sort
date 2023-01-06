// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix || !matrix.length) return [];
    return matrix.map((arr, i) => (i % 2 ? arr.reverse() : arr)).flat();
};
