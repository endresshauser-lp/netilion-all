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
    instance = new NetilionApiDocumentation.AssetBase();
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

  describe('AssetBase', function() {
    it('should create an instance of AssetBase', function() {
      // uncomment below and update the code to test AssetBase
      //var instance = new NetilionApiDocumentation.AssetBase();
      //expect(instance).to.be.a(NetilionApiDocumentation.AssetBase);
    });

    it('should have the property serialNumber (base name: "serial_number")', function() {
      // uncomment below and update the code to test the property serialNumber
      //var instance = new NetilionApiDocumentation.AssetBase();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new NetilionApiDocumentation.AssetBase();
      //expect(instance).to.be();
    });

    it('should have the property productionDate (base name: "production_date")', function() {
      // uncomment below and update the code to test the property productionDate
      //var instance = new NetilionApiDocumentation.AssetBase();
      //expect(instance).to.be();
    });

    it('should have the property lastSeenAt (base name: "last_seen_at")', function() {
      // uncomment below and update the code to test the property lastSeenAt
      //var instance = new NetilionApiDocumentation.AssetBase();
      //expect(instance).to.be();
    });

  });

}));
