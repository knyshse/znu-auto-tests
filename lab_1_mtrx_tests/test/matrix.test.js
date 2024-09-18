const { expect } = require('chai');
const Mtrx = require('Mtrx');


describe('Matrix addition', function() {
  it('should return the correct result for matrix addition', function() {
    const matrix1 = new Mtrx([[1, 2], [3, 4]]);
    const matrix2 = new Mtrx([[5, 6], [7, 8]]);
    const result = matrix1.add(matrix2);

    expect(result).to.deep.equal([[6, 8], [10, 12]]);
  });

  it('should return the incorrect result for matrix addition', function() {
    const matrix1 = new Mtrx([[1, 2], [3, 4]]);
    const matrix2 = new Mtrx([[5, 6], [7, 8]]);
    const result = matrix1.add(matrix2);

    expect(result).not.to.deep.equal([[6, 7], [10, 12]]);
  });
});

describe('Matrix creation methods', function() {  
    it('should create a matrix of zeros with the specified shape', function() {
    const zerosMatrix = Mtrx.zeros(2, 3);
    expect(zerosMatrix).to.deep.equal([[0, 0, 0], [0, 0, 0]]);
    });

    it('should create a matrix of ones with the specified shape', function() {
    const onesMatrix = Mtrx.ones(2, 3);
    expect(onesMatrix).to.deep.equal([[1, 1, 1], [1, 1, 1]]);
    });

    it('should create an identity matrix of the specified size', function() {
    const eyeMatrix = Mtrx.eye(3);
    expect(eyeMatrix).to.deep.equal([[1, 0, 0], [0, 1, 0], [0, 0, 1]]);
    });

    it('should create a matrix with random values between 0 and 1', function() {
    const randMatrix = Mtrx.rand(2, 2);
    expect(randMatrix.length).to.equal(2);
    expect(randMatrix[0].length).to.equal(2);
    randMatrix.forEach(row => {
          row.forEach(value => {
          expect(value).to.be.within(0, 1);
          });
        });
    });

    it('should create a diagonal matrix from a given array', function() {
        const diagMatrix = Mtrx.diag([1, 2, 3]);
        expect(diagMatrix).to.deep.equal([[1, 0, 0], [0, 2, 0], [0, 0, 3]]);
    });
});

describe('Matrix manipulation methods', function() {
    it('should get the value from the specified position', function() {
      const matrix = new Mtrx([[1, 2], [3, 4]]);
      const value = matrix.get(1, 1);
      expect(value).to.equal(4);
    });
  
    it('should set the value at the specified position', function() {
      const matrix = new Mtrx([[1, 2], [3, 4]]);
      matrix.set(1, 1, 10);
      expect(matrix.get(1, 1)).to.equal(10);
    });
  
    it('should transpose the matrix', function() {
      const matrix = new Mtrx([[1, 2], [3, 4]]);
      const transposed = matrix.T();
      expect(transposed).to.deep.equal([[1, 3], [2, 4]]);
    });
  
    it('should calculate the inverse of a matrix', function() {
      const matrix = new Mtrx([[4, 7], [2, 6]]);
      const inverse = matrix.inv();
      
      // We use closeTo() instead of equal() because floating point arithmetic in JavaScript can result in small precision errors.
      // closeTo allows us to compare numbers that are very close but not exactly equal, within a specified tolerance (delta).
      expect(inverse[0][0]).to.be.closeTo(0.6, 0.0001);
      expect(inverse[0][1]).to.be.closeTo(-0.7, 0.0001);
      expect(inverse[1][0]).to.be.closeTo(-0.2, 0.0001);
      expect(inverse[1][1]).to.be.closeTo(0.4, 0.0001);
    });  
});
