const chai = require('chai');
const expect = chai.expect;
const MyMatrix = require('../src/matrix');

describe('MyMatrix', function() {
    
    describe('zeros', function() {
        it('should create a matrix filled with zeros', function() {
            const result = MyMatrix.zeros(3, 3);
            expect(result).to.be.an('array');
            expect(result.length).to.equal(3);
            expect(result[0].length).to.equal(3);
            expect(result.every(row => row.every(el => el === 0))).to.be.true;
        });

        it('should create a matrix filled with zeros with the specified shape', function() {
            const result = MyMatrix.zeros(4, 2);
            expect(result).to.be.an('array');
            expect(result.length).to.equal(4);
            expect(result[0].length).to.equal(2);
            expect(result.every(row => row.every(el => el === 0))).to.be.true;
        });

    });

    describe('ones', function() {
        it('should create a matrix filled with ones', function() {
            const result = MyMatrix.ones(2, 2);
            expect(result).to.be.an('array');
            expect(result.length).to.equal(2);
            expect(result[0].length).to.equal(2);
            expect(result.every(row => row.every(el => el === 1))).to.be.true;
        });

        it('should create a matrix filled with ones with the specified shape', function() {
            const result = MyMatrix.ones(6, 7);
            expect(result).to.be.an('array');
            expect(result.length).to.equal(6);
            expect(result[0].length).to.equal(7);
            expect(result.every(row => row.every(el => el === 1))).to.be.true;
        });
    });
});
