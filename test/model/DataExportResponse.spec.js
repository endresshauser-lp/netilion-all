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
    instance = new NetilionApiDocumentation.DataExportResponse();
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

  describe('DataExportResponse', function() {
    it('should create an instance of DataExportResponse', function() {
      // uncomment below and update the code to test DataExportResponse
      //var instance = new NetilionApiDocumentation.DataExportResponse();
      //expect(instance).to.be.a(NetilionApiDocumentation.DataExportResponse);
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new NetilionApiDocumentation.DataExportResponse();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new NetilionApiDocumentation.DataExportResponse();
      //expect(instance).to.be();
    });

    it('should have the property startDate (base name: "start_date")', function() {
      // uncomment below and update the code to test the property startDate
      //var instance = new NetilionApiDocumentation.DataExportResponse();
      //expect(instance).to.be();
    });

    it('should have the property endDate (base name: "end_date")', function() {
      // uncomment below and update the code to test the property endDate
      //var instance = new NetilionApiDocumentation.DataExportResponse();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new NetilionApiDocumentation.DataExportResponse();
      //expect(instance).to.be();
    });

    it('should have the property finishedAt (base name: "finished_at")', function() {
      // uncomment below and update the code to test the property finishedAt
      //var instance = new NetilionApiDocumentation.DataExportResponse();
      //expect(instance).to.be();
    });

    it('should have the property exportFileName (base name: "export_file_name")', function() {
      // uncomment below and update the code to test the property exportFileName
      //var instance = new NetilionApiDocumentation.DataExportResponse();
      //expect(instance).to.be();
    });

    it('should have the property exportContentType (base name: "export_content_type")', function() {
      // uncomment below and update the code to test the property exportContentType
      //var instance = new NetilionApiDocumentation.DataExportResponse();
      //expect(instance).to.be();
    });

    it('should have the property exportFileSize (base name: "export_file_size")', function() {
      // uncomment below and update the code to test the property exportFileSize
      //var instance = new NetilionApiDocumentation.DataExportResponse();
      //expect(instance).to.be();
    });

    it('should have the property exportUpdatedAt (base name: "export_updated_at")', function() {
      // uncomment below and update the code to test the property exportUpdatedAt
      //var instance = new NetilionApiDocumentation.DataExportResponse();
      //expect(instance).to.be();
    });

    it('should have the property exportFingerprint (base name: "export_fingerprint")', function() {
      // uncomment below and update the code to test the property exportFingerprint
      //var instance = new NetilionApiDocumentation.DataExportResponse();
      //expect(instance).to.be();
    });

    it('should have the property user (base name: "user")', function() {
      // uncomment below and update the code to test the property user
      //var instance = new NetilionApiDocumentation.DataExportResponse();
      //expect(instance).to.be();
    });

    it('should have the property instrumentation (base name: "instrumentation")', function() {
      // uncomment below and update the code to test the property instrumentation
      //var instance = new NetilionApiDocumentation.DataExportResponse();
      //expect(instance).to.be();
    });

    it('should have the property downloadHref (base name: "download_href")', function() {
      // uncomment below and update the code to test the property downloadHref
      //var instance = new NetilionApiDocumentation.DataExportResponse();
      //expect(instance).to.be();
    });

    it('should have the property availableUntil (base name: "available_until")', function() {
      // uncomment below and update the code to test the property availableUntil
      //var instance = new NetilionApiDocumentation.DataExportResponse();
      //expect(instance).to.be();
    });

  });

}));
