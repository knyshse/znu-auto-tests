import * as chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import MyMatrix from '../src/matrix.js'; // Мій клас MyMatrix
import * as Mtrx from 'mtrx'; // Імпортуємо mtrx як ES модуль, залежність каласу MyMatrix

chai.use(sinonChai);
const expect = chai.expect;

describe('MyMatrix', () => {
    describe('Static Methods', () => {
        let mtrxStub;

        beforeEach(() => {
            // Підміняємо статичну властивість MyMatrix.mtrxLib на об'єкт заглушки
            MyMatrix.mtrxLib = {
                zeros: sinon.stub(),
                ones: sinon.stub(),
                eye: sinon.stub(),
            };
            mtrxStub = MyMatrix.mtrxLib;
        });

        afterEach(() => {
            // Повертаємо оригінальну бібліотеку після кожного тесту
            MyMatrix.mtrxLib = Mtrx;
        });

        it('should create a matrix of zeros', () => {
            // Налаштовуємо повернення значення для заглушки
            mtrxStub.zeros.withArgs(2, 2).returns([[0, 0], [0, 0]]);

            const matrix = MyMatrix.zeros(2, 2);

            // Перевіряємо, чи був викликаний метод
            expect(mtrxStub.zeros).to.have.been.calledWith(2, 2);
            expect(matrix).to.deep.equal([[0, 0], [0, 0]]);
        });

        it('should create a matrix of ones', () => {
            mtrxStub.ones.withArgs(2, 2).returns([[1, 1], [1, 1]]);

            const matrix = MyMatrix.ones(2, 2);

            expect(mtrxStub.ones).to.have.been.calledWith(2, 2);
            expect(matrix).to.deep.equal([[1, 1], [1, 1]]);
        });

        it('should create an identity matrix', () => {
            mtrxStub.eye.withArgs(2).returns([[1, 0], [0, 1]]);

            const matrix = MyMatrix.identity(2);

            expect(mtrxStub.eye).to.have.been.calledWith(2);
            expect(matrix).to.deep.equal([[1, 0], [0, 1]]);
        });
    });

    describe('Instance Methods with sinon', () => {

        it('should correctly call transpose method', () => {
            // Створюємо екземпляр матриці
            const matrix = new MyMatrix([
                [1, 2, 3],
                [4, 5, 6]
            ]);

            // Створюємо заглушку (stub) для методу transpose
            const transposeStub = sinon.stub(matrix, 'transpose').callsFake(function () {
                return new MyMatrix([
                    [1, 4],
                    [2, 5],
                    [3, 6]
                ]);
            });

            // Викликаємо метод transpose
            const result = matrix.transpose();

            // Перевіряємо, чи був викликаний метод transpose
            expect(transposeStub).to.have.been.calledOnce;
            expect(result.data).to.deep.equal([
                [1, 4],
                [2, 5],
                [3, 6]
            ]);

            // Відновлюємо початкову поведінку методу
            transposeStub.restore();
        });

        it('should correctly call multiplyMatrix method', () => {
            // Створюємо два екземпляри матриць
            const matrixA = new MyMatrix([
                [1, 2],
                [3, 4]
            ]);
            const matrixB = new MyMatrix([
                [2, 0],
                [1, 2]
            ]);

            // Створюємо заглушку (stub) для методу multiplyMatrix
            const multiplyStub = sinon.stub(matrixA, 'multiplyMatrix').callsFake(function () {
                return new MyMatrix([
                    [4, 4],
                    [10, 8]
                ]);
            });

            // Викликаємо метод multiplyMatrix
            const result = matrixA.multiplyMatrix(matrixB);

            // Перевіряємо, чи був викликаний метод multiplyMatrix
            expect(multiplyStub).to.have.been.calledOnceWith(matrixB);
            expect(result.data).to.deep.equal([
                [4, 4],
                [10, 8]
            ]);

            // Відновлюємо початкову поведінку методу
            multiplyStub.restore();
        });

        it('should call multiplyMatrix method and throw an error with incompatible dimensions', () => {
            const matrixA = new MyMatrix([
                [1, 2],
                [3, 4]
            ]);
            const matrixB = new MyMatrix([
                [1, 2, 3]
            ]);

            // Створюємо заглушку (stub) для методу multiplyMatrix з викидом помилки
            const multiplyStub = sinon.stub(matrixA, 'multiplyMatrix').throws(new Error('Matrices cannot be multiplied due to incompatible dimensions'));

            // Викликаємо метод multiplyMatrix і перевіряємо, чи була викинута помилка
            expect(() => matrixA.multiplyMatrix(matrixB)).to.throw('Matrices cannot be multiplied due to incompatible dimensions');

            // Перевіряємо, чи був викликаний метод multiplyMatrix
            expect(multiplyStub).to.have.been.calledOnceWith(matrixB);

            // Відновлюємо початкову поведінку методу
            multiplyStub.restore();
        });
    });
});
