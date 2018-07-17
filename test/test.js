const expect = require('chai').expect;
const {convertToFfromC, convertToCfromF} = require('../index');

describe("converter", () => {
    describe("convertToFfromC", () => {
        it("exists", () => {
            expect(convertToFfromC).to.be.ok;
        })
        it("0 degrees Celcius should be 32 degrees F", () => {
            expect(convertToFfromC(0)).to.equal(32);
        })
        it("100 degrees Celcius should be 212 degrees F", () => {
            expect(convertToFfromC(100)).to.equal(212);
        })
    })
    describe("convertToCfromF", () => {
        it("exists", () => {
            expect(convertToCfromF).to.be.ok;
        })
        it("32 degrees F should be 0 degrees Celcius", () => {
            expect(convertToCfromF(32)).to.equal(0);
        })
        it("212 degrees F should be 100 degrees Celcius", () => {
            expect(convertToCfromF(212)).to.equal(100);
        })
    })
})