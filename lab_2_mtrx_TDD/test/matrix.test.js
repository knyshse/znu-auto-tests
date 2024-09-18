const chai = require('chai');
const expect = chai.expect;
const MyMatrix = require('../src/matrix');

describe('MyMatrix tests', function () {
    describe('creation', function () {
        it('MyMatrix.data property should be correct after creation', function () {
            const arr = [[1, 2, 3], [0, 9, 8], [11, 12, 13]];
            const matrix = new MyMatrix(arr);

            expect(matrix.data).to.equal(arr);
        });
    });

    describe('zeros', function () {
        it('should create a matrix filled with zeros', function () {
            const result = MyMatrix.zeros(3, 3);
            expect(result).to.be.an('array');
            expect(result.length).to.equal(3);
            expect(result[0].length).to.equal(3);
            expect(result.every(row => row.every(el => el === 0))).to.be.true;
        });

        it('should create a matrix filled with zeros with the specified shape', function () {
            const result = MyMatrix.zeros(4, 2);
            expect(result).to.be.an('array');
            expect(result.length).to.equal(4);
            expect(result[0].length).to.equal(2);
            expect(result.every(row => row.every(el => el === 0))).to.be.true;
        });

    });

    describe('ones', function () {
        it('should create a matrix filled with ones', function () {
            const result = MyMatrix.ones(2, 2);
            expect(result).to.be.an('array');
            expect(result.length).to.equal(2);
            expect(result[0].length).to.equal(2);
            expect(result.every(row => row.every(el => el === 1))).to.be.true;
        });

        it('should create a matrix filled with ones with the specified shape', function () {
            const result = MyMatrix.ones(6, 7);
            expect(result).to.be.an('array');
            expect(result.length).to.equal(6);
            expect(result[0].length).to.equal(7);
            expect(result.every(row => row.every(el => el === 1))).to.be.true;
        });
    });

    describe('areEqual', function () {
        it('two matrixs must be identical', function () {
            const matrixA = new MyMatrix([[1, 2], [3, 4]]);
            const matrixB = new MyMatrix([[1, 2], [3, 4]]);
            const matrixC = new MyMatrix([[1, 3], [3, 5]]);

            expect(MyMatrix.areEqual(matrixA, matrixB)).to.be.true;
            expect(MyMatrix.areEqual(matrixA, matrixC)).to.be.false;
        });
    });

});
