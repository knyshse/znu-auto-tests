import * as Mtrx from 'mtrx'; // Імпортуємо mtrx як ES модуль

export default class MyMatrix {
    constructor(data) {
        this.data = data;
    }

    // Встановлюємо статичну властивість для бібліотеки mtrx
    // Це залежність яку ми будемо мокать в тестах
    static mtrxLib = Mtrx;

    static zeros(rows, cols) {
        return this.mtrxLib.zeros(rows, cols); // Використовуємо mtrxLib
    }

    static ones(rows, cols) {
        return this.mtrxLib.ones(rows, cols); // Використовуємо mtrxLib
    }

    static identity(n) {
        return this.mtrxLib.eye(n); // Використовуємо mtrxLib
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

    // Транспонування матриці
    transpose() {
        const transposed = this.data[0].map((_, colIndex) =>
            this.data.map(row => row[colIndex])
        );
        return new MyMatrix(transposed);
    }

    // Множення матриці на іншу матрицю
    multiplyMatrix(matrix) {
        if (this.data[0].length !== matrix.data.length) {
            throw new Error('Matrices cannot be multiplied due to incompatible dimensions');
        }

        const result = this.data.map((row, i) =>
            matrix.data[0].map((_, j) =>
                row.reduce((sum, element, k) => sum + element * matrix.data[k][j], 0)
            )
        );

        return new MyMatrix(result);
    }
}
