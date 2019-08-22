/**
 * Netilion API Documentation
 * Welcome to the Netilion API Documentation, which provides interactive access and documentation to our REST API. Please visit our developer portal for further instructions and information: https://developer.netilion.endress.com/ 
 *
 * OpenAPI spec version: 01.00.00
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.7
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.NetilionApiDocumentation);
  }
}(this, function(expect, NetilionApiDocumentation) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new NetilionApiDocumentation.UserRoleApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('UserRoleApi', function() {
    describe('addUsersToUserRole', function() {
      it('should call addUsersToUserRole successfully', function(done) {
        //uncomment below and update the code to test addUsersToUserRole
        //instance.addUsersToUserRole(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createUserRole', function() {
      it('should call createUserRole successfully', function(done) {
        //uncomment below and update the code to test createUserRole
        //instance.createUserRole(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteUserRole', function() {
      it('should call deleteUserRole successfully', function(done) {
        //uncomment below and update the code to test deleteUserRole
        //instance.deleteUserRole(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteUsersFromUserRole', function() {
      it('should call deleteUsersFromUserRole successfully', function(done) {
        //uncomment below and update the code to test deleteUsersFromUserRole
        //instance.deleteUsersFromUserRole(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUserRoleById', function() {
      it('should call getUserRoleById successfully', function(done) {
        //uncomment below and update the code to test getUserRoleById
        //instance.getUserRoleById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUserRoles', function() {
      it('should call getUserRoles successfully', function(done) {
        //uncomment below and update the code to test getUserRoles
        //instance.getUserRoles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUsersOfUserRole', function() {
      it('should call getUsersOfUserRole successfully', function(done) {
        //uncomment below and update the code to test getUsersOfUserRole
        //instance.getUsersOfUserRole(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceUsersOfUserRole', function() {
      it('should call replaceUsersOfUserRole successfully', function(done) {
        //uncomment below and update the code to test replaceUsersOfUserRole
        //instance.replaceUsersOfUserRole(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateUserRole', function() {
      it('should call updateUserRole successfully', function(done) {
        //uncomment below and update the code to test updateUserRole
        //instance.updateUserRole(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
