var assert = require('assert');

var arithmetic = require('../arithmetic_func.js');

// Tests are hierarchical. Here we define a test suite for our calculator.
describe('Valid Operator and valid values',function(){
	// And then we describe our testcases.
	it('Addition operation returns 8+7=15', function(done) {
		assert.equal(arithmetic.arthimetic_calculations('+',8, 7), 15);
		// Invoke done when the test is complete.
		done();
	});

	it('Subtraction operation returns 37-16=21', function(done) {
		assert.equal(arithmetic.arthimetic_calculations('-',37, 16), 21);
		done();
		});
		
		it('Multiplication operation returns 5*12=60', function(done) {
			assert.equal(arithmetic.arthimetic_calculations('*',5, 12), 60);
			done();
			});

			it('Division operation returns 1470 / 7=210', function(done) {
				assert.equal(arithmetic.arthimetic_calculations('/',1470, 7), 210);
				done();
				});

				it('This operation is for future purpose');
				it("this operation is also for future purpose");

});

describe('Division operation failure case', function(){
	// And then we describe our testcases.
	it('returns can not divide by 0', function(done) {
		assert.equal(arithmetic.arthimetic_calculations('/',100, 0), 'Can not divide by 0');
		done();
    });
   it.skip("future purpose division problems skipping presently", function(done){

	 });
});


describe('invalid operatiors and valid values', function(){
// And then we describe our testcases.
	it('\'%\' is not accepted by the script', function(done) {
		assert.equal(arithmetic.arthimetic_calculations('%',9, 1), 'Wrong Operation Type');
		done();
		});
		
		it('\'++\' is not accepted by the script', function(done) {
			assert.equal(arithmetic.arthimetic_calculations('++',9, 1), 'Wrong Operation Type');
			done();
			});

		it('\'+-\' is not accepted by the script', function(done) {
				assert.equal(arithmetic.arthimetic_calculations('+-',9, 1), 'Wrong Operation Type');
				done();
				});
			 
			it('\'+*\' is not accepted by the script', function(done) {
					assert.equal(arithmetic.arthimetic_calculations('+*',9, 1), 'Wrong Operation Type');
					done();
					});

					it('\'+/\' is not accepted by the script', function(done) {
						assert.equal(arithmetic.arthimetic_calculations('+/',9, 1), 'Wrong Operation Type');
						done();
						});
					it.skip('\'--\' is not accepted by the script', function(done) {
							assert.equal(arithmetic.arthimetic_calculations('+-',9, 1), 'Wrong Operation Type');
							done();
							});
});

describe.skip('Future purpose invalid operatiors and valid values ', function() {
	// And then we describe our testcases.
	it('\'ab\' is not accepted by the script', function(done) {
		assert.equal(arithmetic.arthimetic_calculations('+-',9, 1), 'Wrong Operation Type');
		done();
		});

		it('\'ab\' is not accepted by the script', function(done) {
			assert.equal(arithmetic.arthimetic_calculations('+-',9, 1), 'Wrong Operation Type');
			done();
			});
		
			it('\'*/\' is not accepted by the script', function(done) {
				assert.equal(arithmetic.arthimetic_calculations('+-',9, 1), 'Wrong Operation Type');
				done();
				});
});


describe('Passing valid operator but invalid numbers', function() {
	// And then we describe our testcases.
	it('numbers are not passed', function(done) {
		assert.notEqual(arithmetic.arthimetic_calculations('/','220S', '1as1', "Must pass numbers as params"), 210);
		done();
		});

		it('number is not passed', function(done) {
			assert.equal(arithmetic.arthimetic_calculations('+','220a', 7), "Must pass numbers as params");
			// Invoke done when the test is complete.
			done();
		});
	
		it('number is not passed', function(done) {
			assert.equal(arithmetic.arthimetic_calculations('-',37, '10s'), "Must pass numbers as params");
			done();
			});
});

describe('passing excess or Null arguments but getting proper results', function(){
// And then we describe our testcases.
it('three arguments are passed but code accepting 2 values only', function(done) {
	//assert.notEqual
	assert.equal(arithmetic.arthimetic_calculations('/',220, 11, 9), 20);
	done();
	});

	it('returns can not divide by 0', function(done) {
		assert.equal(arithmetic.arthimetic_calculations('/',100, 0,1), 'Can not divide by 0');
		done();
    });

		it.skip('not accepting less number of arguments', function(done) {
			assert.equal(arithmetic.arthimetic_calculations('/', null, 2,), 'Must pass two numbers as parameters');
			done();
			});
});


describe('not equal conditions', function() {
	// And then we describe our testcases.
    
	it('division is not equal to unwanted value', function(done) {
		//assert.notEqual
		assert.notEqual(arithmetic.arthimetic_calculations('/',220, 0), 210);
		done();
		});


})
/*describe.only('Arthimetic Tests', function() {
	// And then we describe our testcases.
    
    it('Not equal', function(done) {
		//assert.notEqual
		assert.notEqual(arithmetic.arthimetic_calculations('/',220, 11, 9), 210);
		done();
		});
		
});*/

