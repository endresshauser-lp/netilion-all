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
    instance = new NetilionApiDocumentation.PermissionApi();
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

  describe('PermissionApi', function() {
    describe('createPermissionInheritance', function() {
      it('should call createPermissionInheritance successfully', function(done) {
        //uncomment below and update the code to test createPermissionInheritance
        //instance.createPermissionInheritance(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createPermissions', function() {
      it('should call createPermissions successfully', function(done) {
        //uncomment below and update the code to test createPermissions
        //instance.createPermissions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deletePermission', function() {
      it('should call deletePermission successfully', function(done) {
        //uncomment below and update the code to test deletePermission
        //instance.deletePermission(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deletePermissionInheritance', function() {
      it('should call deletePermissionInheritance successfully', function(done) {
        //uncomment below and update the code to test deletePermissionInheritance
        //instance.deletePermissionInheritance(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPermissionById', function() {
      it('should call getPermissionById successfully', function(done) {
        //uncomment below and update the code to test getPermissionById
        //instance.getPermissionById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPermissionInheritanceById', function() {
      it('should call getPermissionInheritanceById successfully', function(done) {
        //uncomment below and update the code to test getPermissionInheritanceById
        //instance.getPermissionInheritanceById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPermissionInheritances', function() {
      it('should call getPermissionInheritances successfully', function(done) {
        //uncomment below and update the code to test getPermissionInheritances
        //instance.getPermissionInheritances(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPermissions', function() {
      it('should call getPermissions successfully', function(done) {
        //uncomment below and update the code to test getPermissions
        //instance.getPermissions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
