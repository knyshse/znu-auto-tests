const Mtrx = require('mtrx'); // will

/*
 * this MyMatrix class is created for testing purposes.
 * For simplicity, the methods of MyMatrix delegate execution to the equivalent methods of the third-party 'mtrx' library.
 */
class MyMatrix {
    static zeros(rows, cols) {
        return Mtrx.zeros(rows, cols);
    }

    static ones(rows, cols) {
        return Mtrx.ones(rows, cols);
    }

    static identity(n) {
        return Mtrx.eye(n);
    }
}

module.exports = MyMatrix;
