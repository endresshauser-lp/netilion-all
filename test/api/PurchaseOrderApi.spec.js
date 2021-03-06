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
    instance = new NetilionApiDocumentation.PurchaseOrderApi();
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

  describe('PurchaseOrderApi', function() {
    describe('addDeliviersToPurchaseOrder', function() {
      it('should call addDeliviersToPurchaseOrder successfully', function(done) {
        //uncomment below and update the code to test addDeliviersToPurchaseOrder
        //instance.addDeliviersToPurchaseOrder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addDocumentsToPurchaseOrder', function() {
      it('should call addDocumentsToPurchaseOrder successfully', function(done) {
        //uncomment below and update the code to test addDocumentsToPurchaseOrder
        //instance.addDocumentsToPurchaseOrder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addProductsToPurchaseOrder', function() {
      it('should call addProductsToPurchaseOrder successfully', function(done) {
        //uncomment below and update the code to test addProductsToPurchaseOrder
        //instance.addProductsToPurchaseOrder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createPurchaseOrder', function() {
      it('should call createPurchaseOrder successfully', function(done) {
        //uncomment below and update the code to test createPurchaseOrder
        //instance.createPurchaseOrder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deletePurchaseOrder', function() {
      it('should call deletePurchaseOrder successfully', function(done) {
        //uncomment below and update the code to test deletePurchaseOrder
        //instance.deletePurchaseOrder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDeliviersOfPurchaseOrder', function() {
      it('should call getDeliviersOfPurchaseOrder successfully', function(done) {
        //uncomment below and update the code to test getDeliviersOfPurchaseOrder
        //instance.getDeliviersOfPurchaseOrder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDocumentsOfPurchaseOrder', function() {
      it('should call getDocumentsOfPurchaseOrder successfully', function(done) {
        //uncomment below and update the code to test getDocumentsOfPurchaseOrder
        //instance.getDocumentsOfPurchaseOrder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductsOfPurchaseOrder', function() {
      it('should call getProductsOfPurchaseOrder successfully', function(done) {
        //uncomment below and update the code to test getProductsOfPurchaseOrder
        //instance.getProductsOfPurchaseOrder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPurchaseOrderById', function() {
      it('should call getPurchaseOrderById successfully', function(done) {
        //uncomment below and update the code to test getPurchaseOrderById
        //instance.getPurchaseOrderById(function(error) {
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
    describe('getPurchaseOrders', function() {
      it('should call getPurchaseOrders successfully', function(done) {
        //uncomment below and update the code to test getPurchaseOrders
        //instance.getPurchaseOrders(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeDeliviersFromPurchaseOrder', function() {
      it('should call removeDeliviersFromPurchaseOrder successfully', function(done) {
        //uncomment below and update the code to test removeDeliviersFromPurchaseOrder
        //instance.removeDeliviersFromPurchaseOrder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeDocumentsFromPurchaseOrder', function() {
      it('should call removeDocumentsFromPurchaseOrder successfully', function(done) {
        //uncomment below and update the code to test removeDocumentsFromPurchaseOrder
        //instance.removeDocumentsFromPurchaseOrder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeProductsFromPurchaseOrder', function() {
      it('should call removeProductsFromPurchaseOrder successfully', function(done) {
        //uncomment below and update the code to test removeProductsFromPurchaseOrder
        //instance.removeProductsFromPurchaseOrder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceDeliviersOfPurchaseOrder', function() {
      it('should call replaceDeliviersOfPurchaseOrder successfully', function(done) {
        //uncomment below and update the code to test replaceDeliviersOfPurchaseOrder
        //instance.replaceDeliviersOfPurchaseOrder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceDocumentsOfPurchaseOrder', function() {
      it('should call replaceDocumentsOfPurchaseOrder successfully', function(done) {
        //uncomment below and update the code to test replaceDocumentsOfPurchaseOrder
        //instance.replaceDocumentsOfPurchaseOrder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceProductsOfPurchaseOrder', function() {
      it('should call replaceProductsOfPurchaseOrder successfully', function(done) {
        //uncomment below and update the code to test replaceProductsOfPurchaseOrder
        //instance.replaceProductsOfPurchaseOrder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateProductQuantitiesOfPurchaseOrder', function() {
      it('should call updateProductQuantitiesOfPurchaseOrder successfully', function(done) {
        //uncomment below and update the code to test updateProductQuantitiesOfPurchaseOrder
        //instance.updateProductQuantitiesOfPurchaseOrder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updatePurchaseOrder', function() {
      it('should call updatePurchaseOrder successfully', function(done) {
        //uncomment below and update the code to test updatePurchaseOrder
        //instance.updatePurchaseOrder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
