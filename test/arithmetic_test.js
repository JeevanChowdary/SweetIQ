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


describe('Arthimetic Tests', function() {
	// And then we describe our testcases.
    
    it('Not equal', function(done) {
		assert.notEqual(arithmetic.arthimetic_calculations('/',220, 11, 9), 210);
		done();
		});
		it('incorrect params', function(done) {
			assert.notEqual(arithmetic.arthimetic_calculations('/','220S', '1as1', "Must pass numbers as params"), 210);
			done();
			});
});

