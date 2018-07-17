const expect = require('chai').expect;
const {convertToFfromC, convertToCfromF} = require('../index');

describe("convertToFfromC", () => {
    it("exists", () => {
        expect(convertToFfromC).to.be.ok;
    })
    it("converts", () => {
        expect(convertToFfromC(0)).to.equal(32);
    })
})
describe("convertToCfromF", () => {
    it("exists", () => {
        expect(convertToCfromF).to.be.ok;
    })
    it("converts", () => {
        expect(convertToCfromF(32)).to.equal(0);
    })
})