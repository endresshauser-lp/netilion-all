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
    instance = new NetilionApiDocumentation.PurchaseOrderBase();
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

  describe('PurchaseOrderBase', function() {
    it('should create an instance of PurchaseOrderBase', function() {
      // uncomment below and update the code to test PurchaseOrderBase
      //var instance = new NetilionApiDocumentation.PurchaseOrderBase();
      //expect(instance).to.be.a(NetilionApiDocumentation.PurchaseOrderBase);
    });

    it('should have the property _number (base name: "number")', function() {
      // uncomment below and update the code to test the property _number
      //var instance = new NetilionApiDocumentation.PurchaseOrderBase();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new NetilionApiDocumentation.PurchaseOrderBase();
      //expect(instance).to.be();
    });

    it('should have the property _date (base name: "date")', function() {
      // uncomment below and update the code to test the property _date
      //var instance = new NetilionApiDocumentation.PurchaseOrderBase();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new NetilionApiDocumentation.PurchaseOrderBase();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new NetilionApiDocumentation.PurchaseOrderBase();
      //expect(instance).to.be();
    });

    it('should have the property sender (base name: "sender")', function() {
      // uncomment below and update the code to test the property sender
      //var instance = new NetilionApiDocumentation.PurchaseOrderBase();
      //expect(instance).to.be();
    });

    it('should have the property receiver (base name: "receiver")', function() {
      // uncomment below and update the code to test the property receiver
      //var instance = new NetilionApiDocumentation.PurchaseOrderBase();
      //expect(instance).to.be();
    });

    it('should have the property quotation (base name: "quotation")', function() {
      // uncomment below and update the code to test the property quotation
      //var instance = new NetilionApiDocumentation.PurchaseOrderBase();
      //expect(instance).to.be();
    });

  });

}));
