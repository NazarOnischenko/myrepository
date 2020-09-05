multiplicationTable = function (size) {
    let mas = new Array(size);
    for (var i = 0; i < size; i++) {
        mas[i] = new Array(size);
    }
    mas[0][0] = 1;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (i != 0 || j != 0) {
                mas[i][j] = mas[i][0] + mas[i][j - 1];
            }
            if (i > 0 && j == 0) {
                mas[i][j] = mas[i - 1][0] + mas[i - 1][0];
            }
        }
    }
    return mas;
}
console.log(multiplicationTable(3))