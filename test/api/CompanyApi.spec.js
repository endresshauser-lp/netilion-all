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
    instance = new NetilionApiDocumentation.CompanyApi();
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

  describe('CompanyApi', function() {
    describe('createCompany', function() {
      it('should call createCompany successfully', function(done) {
        //uncomment below and update the code to test createCompany
        //instance.createCompany(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCompany', function() {
      it('should call deleteCompany successfully', function(done) {
        //uncomment below and update the code to test deleteCompany
        //instance.deleteCompany(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAssetCompanyOptions', function() {
      it('should call getAssetCompanyOptions successfully', function(done) {
        //uncomment below and update the code to test getAssetCompanyOptions
        //instance.getAssetCompanyOptions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCompanies', function() {
      it('should call getCompanies successfully', function(done) {
        //uncomment below and update the code to test getCompanies
        //instance.getCompanies(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCompanyById', function() {
      it('should call getCompanyById successfully', function(done) {
        //uncomment below and update the code to test getCompanyById
        //instance.getCompanyById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDeliveriesReceivedOfCompany', function() {
      it('should call getDeliveriesReceivedOfCompany successfully', function(done) {
        //uncomment below and update the code to test getDeliveriesReceivedOfCompany
        //instance.getDeliveriesReceivedOfCompany(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDeliveriesSentOfCompany', function() {
      it('should call getDeliveriesSentOfCompany successfully', function(done) {
        //uncomment below and update the code to test getDeliveriesSentOfCompany
        //instance.getDeliveriesSentOfCompany(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductsOfCompany', function() {
      it('should call getProductsOfCompany successfully', function(done) {
        //uncomment below and update the code to test getProductsOfCompany
        //instance.getProductsOfCompany(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCompany', function() {
      it('should call updateCompany successfully', function(done) {
        //uncomment below and update the code to test updateCompany
        //instance.updateCompany(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
