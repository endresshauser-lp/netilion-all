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
    instance = new NetilionApiDocumentation.AssetHistory();
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

  describe('AssetHistory', function() {
    it('should create an instance of AssetHistory', function() {
      // uncomment below and update the code to test AssetHistory
      //var instance = new NetilionApiDocumentation.AssetHistory();
      //expect(instance).to.be.a(NetilionApiDocumentation.AssetHistory);
    });

    it('should have the property asset (base name: "asset")', function() {
      // uncomment below and update the code to test the property asset
      //var instance = new NetilionApiDocumentation.AssetHistory();
      //expect(instance).to.be();
    });

    it('should have the property datetime (base name: "datetime")', function() {
      // uncomment below and update the code to test the property datetime
      //var instance = new NetilionApiDocumentation.AssetHistory();
      //expect(instance).to.be();
    });

  });

}));
