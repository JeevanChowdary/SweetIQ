var assert = require('assert');
var should = require('chai').should();
describe('Basic mocha test', function(){
    it('should deal with objects', function(){
        var obj1= {name: 'jon', gender:'male'};
        var obj2= {name: 'jon', gender:'male'};

        obj1.should.have.property('name').equal('jon');
        obj1.should.deep.equal(obj2);
    })
    it('should allow testing nulls', function(){
        var iAmNull = null;
        
        should.not.exist(iAmNull);
    })

});