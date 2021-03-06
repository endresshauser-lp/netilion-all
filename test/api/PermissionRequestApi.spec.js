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
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.NetilionApiDocumentation);
  }
}(this, function(expect, NetilionApiDocumentation) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new NetilionApiDocumentation.PermissionRequestApi();
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

  describe('PermissionRequestApi', function() {
    describe('createPermissionRequest', function() {
      it('should call createPermissionRequest successfully', function(done) {
        //uncomment below and update the code to test createPermissionRequest
        //instance.createPermissionRequest(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deletePermissionRequest', function() {
      it('should call deletePermissionRequest successfully', function(done) {
        //uncomment below and update the code to test deletePermissionRequest
        //instance.deletePermissionRequest(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPermissionRequestById', function() {
      it('should call getPermissionRequestById successfully', function(done) {
        //uncomment below and update the code to test getPermissionRequestById
        //instance.getPermissionRequestById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updatePermissionRequest', function() {
      it('should call updatePermissionRequest successfully', function(done) {
        //uncomment below and update the code to test updatePermissionRequest
        //instance.updatePermissionRequest(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
