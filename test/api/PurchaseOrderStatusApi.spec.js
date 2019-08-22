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
    instance = new NetilionApiDocumentation.PurchaseOrderStatusApi();
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

  describe('PurchaseOrderStatusApi', function() {
    describe('createPurchaseOrderStatus', function() {
      it('should call createPurchaseOrderStatus successfully', function(done) {
        //uncomment below and update the code to test createPurchaseOrderStatus
        //instance.createPurchaseOrderStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deletePurchaseOrderStatus', function() {
      it('should call deletePurchaseOrderStatus successfully', function(done) {
        //uncomment below and update the code to test deletePurchaseOrderStatus
        //instance.deletePurchaseOrderStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPurchaseOrderIdStatus', function() {
      it('should call getPurchaseOrderIdStatus successfully', function(done) {
        //uncomment below and update the code to test getPurchaseOrderIdStatus
        //instance.getPurchaseOrderIdStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPurchaseOrderStatusById', function() {
      it('should call getPurchaseOrderStatusById successfully', function(done) {
        //uncomment below and update the code to test getPurchaseOrderStatusById
        //instance.getPurchaseOrderStatusById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPurchaseOrderStatuses', function() {
      it('should call getPurchaseOrderStatuses successfully', function(done) {
        //uncomment below and update the code to test getPurchaseOrderStatuses
        //instance.getPurchaseOrderStatuses(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updatePurchaseOrderStatus', function() {
      it('should call updatePurchaseOrderStatus successfully', function(done) {
        //uncomment below and update the code to test updatePurchaseOrderStatus
        //instance.updatePurchaseOrderStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
