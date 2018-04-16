/*var assert = require('assert');
var authController = require('../auth.controller.js');
var expect = require('chai').expect;
var should = require('chai').should();
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var sinon = require('sinon');
chai.use(chaiAsPromised);
chai.should();


describe('AuthController', function(){

    beforeEach(function(){
       console.log('running before each');
       authController.setRoles(['user']);
    });
    describe.only('isAuthorized', function(){
        var user= {};

        beforeEach(function(){
            user = {
                roles: ['user'],
                isAuthorized: function(neededRole) {
                    return this.roles.indexOf(neededRole)>=0;
                }
            }
            sinon.spy(user,'isAuthorized');
            authController.setUser(user);
         });

        it.only('should return false if not authorized', function(){
            var isAuth = authController.isAuthorized('admin');
                        //assert.equal(false,isAuth);
                        console.log(user.isAuthorized);
                        user.isAuthorized.calledOnce.should.be.true;
                        expect(isAuth).to.be.false;
        })

        it('should return true if authorized', function(){
            authController.setRoles(['user', 'admin']);
            var isAuth = authController.isAuthorized('admin');
            isAuth.should.be.true;
            
        })

        it('should not allow a get if not authorized');
        it('should allow get if authorized');
    })

        describe('isAuthorizedAsync', function(){
        it('should return false if not authorized', function(done){
            
            authController.isAuthorizedAsync( 'admin', function(isAuth){
                assert.equal(false, isAuth);
                done();
            });
    })
})

describe('isAuthorizedPromise', function(){
    it('should return false if not authorized', function(){
        return authController.isAuthorizedPromise('admin').should.eventually.be.false; 
        done();
})
})

describe('getIndex', function(){
    it('should return Index', function(){
        var req ={};
        var res ={
            render: sinon.spy()
        };
        authController.getIndex(req, res); 
        //console.log(res.render);
        res.render.calledOnce.should.be.true;
        res.render.firstCall.args[0].should.equal('index');
})
})



});*/