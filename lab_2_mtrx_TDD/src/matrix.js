const Mtrx = require('mtrx');

/*
 * this MyMatrix class is created for testing purposes.
 * For simplicity, the methods of MyMatrix delegate execution to the equivalent methods of the third-party 'mtrx' library.
 */
class MyMatrix {

    constructor(data) {
        this.data = data;
    }


    static zeros(rows, cols) {
        return Mtrx.zeros(rows, cols);
    }

    static ones(rows, cols) {
        return Mtrx.ones(rows, cols);
    }

    static identity(n) {
        return Mtrx.eye(n);
    }

    static areEqual(matrixA, matrixB) {

        if (!(matrixA instanceof MyMatrix) || !(matrixB instanceof MyMatrix)) {
            return false;
        }

        const dataA = matrixA.data;
        const dataB = matrixB.data;

        if (dataA.length !== dataB.length) return false;

        for (let i = 0; i < dataA.length; i++) {
            if (dataA[i].length !== dataB[i].length) return false;
            for (let j = 0; j < dataA[i].length; j++) {
                if (dataA[i][j] !== dataB[i][j]) {
                    return false;
                }
            }
        }
        return true;
    }

}

module.exports = MyMatrix;
