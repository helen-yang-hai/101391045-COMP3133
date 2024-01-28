var assert = require('assert')
const Calculator = require('../app/calculator')

describe("Calculator Result", function(){
    //add
    it("Add(5,2) expected result 7 PASS", function(){
        assert.equal(Calculator.add(5, 2), 7);
    });

    it("Add(5,2) expected result 8 FAIL", function(){
        assert.equal(Calculator.add(5, 2), 8);
    });

    //sub
    it("Sub(5,2) expected result 3 PASS", function(){
        assert.equal(Calculator.sub(5, 2), 3);
    });

    it("Sub(5,2) expected result 5 FAIL", function(){
        assert.equal(Calculator.sub(5, 2), 5);
    });

    //mul
    it("Mul(5,2) expected result 10 PASS", function(){
        assert.equal(Calculator.mul(5, 2), 10);
    });

    it("Mul(5,2) expected result 12 FAIL", function(){
        assert.equal(Calculator.mul(5, 2), 12);
    });

    //div
    it("Div(10,2) expected result 5 PASS", function(){
        assert.equal(Calculator.div(10, 2), 5);
    });

    it("Div(10,2) expected result 2 FAIL", function(){
        assert.equal(Calculator.div(10, 2), 2);
    });
})