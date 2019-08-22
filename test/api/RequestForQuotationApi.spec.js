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
    instance = new NetilionApiDocumentation.RequestForQuotationApi();
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

  describe('RequestForQuotationApi', function() {
    describe('addBillOfMaterialsToRequestForQuotation', function() {
      it('should call addBillOfMaterialsToRequestForQuotation successfully', function(done) {
        //uncomment below and update the code to test addBillOfMaterialsToRequestForQuotation
        //instance.addBillOfMaterialsToRequestForQuotation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addDocumentsToRequestForQuotation', function() {
      it('should call addDocumentsToRequestForQuotation successfully', function(done) {
        //uncomment below and update the code to test addDocumentsToRequestForQuotation
        //instance.addDocumentsToRequestForQuotation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addQuotationsToRequestForQuotation', function() {
      it('should call addQuotationsToRequestForQuotation successfully', function(done) {
        //uncomment below and update the code to test addQuotationsToRequestForQuotation
        //instance.addQuotationsToRequestForQuotation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createRequestForQuotation', function() {
      it('should call createRequestForQuotation successfully', function(done) {
        //uncomment below and update the code to test createRequestForQuotation
        //instance.createRequestForQuotation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteBillOfMaterialsFromRequestForQuotation', function() {
      it('should call deleteBillOfMaterialsFromRequestForQuotation successfully', function(done) {
        //uncomment below and update the code to test deleteBillOfMaterialsFromRequestForQuotation
        //instance.deleteBillOfMaterialsFromRequestForQuotation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteDocumentsOfRequestForQuotation', function() {
      it('should call deleteDocumentsOfRequestForQuotation successfully', function(done) {
        //uncomment below and update the code to test deleteDocumentsOfRequestForQuotation
        //instance.deleteDocumentsOfRequestForQuotation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteQuotationsFromRequestForQuotation', function() {
      it('should call deleteQuotationsFromRequestForQuotation successfully', function(done) {
        //uncomment below and update the code to test deleteQuotationsFromRequestForQuotation
        //instance.deleteQuotationsFromRequestForQuotation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteRequestForQuotation', function() {
      it('should call deleteRequestForQuotation successfully', function(done) {
        //uncomment below and update the code to test deleteRequestForQuotation
        //instance.deleteRequestForQuotation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBillOfMaterialsOfRequestForQuotation', function() {
      it('should call getBillOfMaterialsOfRequestForQuotation successfully', function(done) {
        //uncomment below and update the code to test getBillOfMaterialsOfRequestForQuotation
        //instance.getBillOfMaterialsOfRequestForQuotation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDocumentsOfRequestForQuotation', function() {
      it('should call getDocumentsOfRequestForQuotation successfully', function(done) {
        //uncomment below and update the code to test getDocumentsOfRequestForQuotation
        //instance.getDocumentsOfRequestForQuotation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getQuotationsOfRequestForQuotation', function() {
      it('should call getQuotationsOfRequestForQuotation successfully', function(done) {
        //uncomment below and update the code to test getQuotationsOfRequestForQuotation
        //instance.getQuotationsOfRequestForQuotation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRequestForQuotationById', function() {
      it('should call getRequestForQuotationById successfully', function(done) {
        //uncomment below and update the code to test getRequestForQuotationById
        //instance.getRequestForQuotationById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRequestForQuotationIdStatus', function() {
      it('should call getRequestForQuotationIdStatus successfully', function(done) {
        //uncomment below and update the code to test getRequestForQuotationIdStatus
        //instance.getRequestForQuotationIdStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRequestForQuotations', function() {
      it('should call getRequestForQuotations successfully', function(done) {
        //uncomment below and update the code to test getRequestForQuotations
        //instance.getRequestForQuotations(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceBillOfMaterialsOfRequestForQuotation', function() {
      it('should call replaceBillOfMaterialsOfRequestForQuotation successfully', function(done) {
        //uncomment below and update the code to test replaceBillOfMaterialsOfRequestForQuotation
        //instance.replaceBillOfMaterialsOfRequestForQuotation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceDocumentsOfRequestForQuotation', function() {
      it('should call replaceDocumentsOfRequestForQuotation successfully', function(done) {
        //uncomment below and update the code to test replaceDocumentsOfRequestForQuotation
        //instance.replaceDocumentsOfRequestForQuotation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceQuotationsOfRequestForQuotation', function() {
      it('should call replaceQuotationsOfRequestForQuotation successfully', function(done) {
        //uncomment below and update the code to test replaceQuotationsOfRequestForQuotation
        //instance.replaceQuotationsOfRequestForQuotation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateRequestForQuotation', function() {
      it('should call updateRequestForQuotation successfully', function(done) {
        //uncomment below and update the code to test updateRequestForQuotation
        //instance.updateRequestForQuotation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
