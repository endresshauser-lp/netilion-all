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
    instance = new NetilionApiDocumentation.QuotationApi();
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

  describe('QuotationApi', function() {
    describe('addDocumentsToQuotation', function() {
      it('should call addDocumentsToQuotation successfully', function(done) {
        //uncomment below and update the code to test addDocumentsToQuotation
        //instance.addDocumentsToQuotation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addProductsToQuotation', function() {
      it('should call addProductsToQuotation successfully', function(done) {
        //uncomment below and update the code to test addProductsToQuotation
        //instance.addProductsToQuotation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addPurchaseOrdersToQuotation', function() {
      it('should call addPurchaseOrdersToQuotation successfully', function(done) {
        //uncomment below and update the code to test addPurchaseOrdersToQuotation
        //instance.addPurchaseOrdersToQuotation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createQuotation', function() {
      it('should call createQuotation successfully', function(done) {
        //uncomment below and update the code to test createQuotation
        //instance.createQuotation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteQuotation', function() {
      it('should call deleteQuotation successfully', function(done) {
        //uncomment below and update the code to test deleteQuotation
        //instance.deleteQuotation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDocumentsOfQuotation', function() {
      it('should call getDocumentsOfQuotation successfully', function(done) {
        //uncomment below and update the code to test getDocumentsOfQuotation
        //instance.getDocumentsOfQuotation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductsOfQuotation', function() {
      it('should call getProductsOfQuotation successfully', function(done) {
        //uncomment below and update the code to test getProductsOfQuotation
        //instance.getProductsOfQuotation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPurchaseOrdersOfQuotation', function() {
      it('should call getPurchaseOrdersOfQuotation successfully', function(done) {
        //uncomment below and update the code to test getPurchaseOrdersOfQuotation
        //instance.getPurchaseOrdersOfQuotation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getQuotationById', function() {
      it('should call getQuotationById successfully', function(done) {
        //uncomment below and update the code to test getQuotationById
        //instance.getQuotationById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getQuotationIdStatus', function() {
      it('should call getQuotationIdStatus successfully', function(done) {
        //uncomment below and update the code to test getQuotationIdStatus
        //instance.getQuotationIdStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getQuotations', function() {
      it('should call getQuotations successfully', function(done) {
        //uncomment below and update the code to test getQuotations
        //instance.getQuotations(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeDocumentsFromQuotation', function() {
      it('should call removeDocumentsFromQuotation successfully', function(done) {
        //uncomment below and update the code to test removeDocumentsFromQuotation
        //instance.removeDocumentsFromQuotation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeProductsFromQuotation', function() {
      it('should call removeProductsFromQuotation successfully', function(done) {
        //uncomment below and update the code to test removeProductsFromQuotation
        //instance.removeProductsFromQuotation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removePurchaseOrdersFromQuotation', function() {
      it('should call removePurchaseOrdersFromQuotation successfully', function(done) {
        //uncomment below and update the code to test removePurchaseOrdersFromQuotation
        //instance.removePurchaseOrdersFromQuotation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceDocumentsOfQuotation', function() {
      it('should call replaceDocumentsOfQuotation successfully', function(done) {
        //uncomment below and update the code to test replaceDocumentsOfQuotation
        //instance.replaceDocumentsOfQuotation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceProductsOfQuotation', function() {
      it('should call replaceProductsOfQuotation successfully', function(done) {
        //uncomment below and update the code to test replaceProductsOfQuotation
        //instance.replaceProductsOfQuotation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replacePurchaseOrdersOfQuotation', function() {
      it('should call replacePurchaseOrdersOfQuotation successfully', function(done) {
        //uncomment below and update the code to test replacePurchaseOrdersOfQuotation
        //instance.replacePurchaseOrdersOfQuotation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateProductQuantitiesOfQuotation', function() {
      it('should call updateProductQuantitiesOfQuotation successfully', function(done) {
        //uncomment below and update the code to test updateProductQuantitiesOfQuotation
        //instance.updateProductQuantitiesOfQuotation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateQuotation', function() {
      it('should call updateQuotation successfully', function(done) {
        //uncomment below and update the code to test updateQuotation
        //instance.updateQuotation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
