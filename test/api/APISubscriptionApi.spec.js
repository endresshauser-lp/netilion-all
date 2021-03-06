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
    instance = new NetilionApiDocumentation.APISubscriptionApi();
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

  describe('APISubscriptionApi', function() {
    describe('addEdgeDevicesToApiSubscription', function() {
      it('should call addEdgeDevicesToApiSubscription successfully', function(done) {
        //uncomment below and update the code to test addEdgeDevicesToApiSubscription
        //instance.addEdgeDevicesToApiSubscription(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createAPISubscription', function() {
      it('should call createAPISubscription successfully', function(done) {
        //uncomment below and update the code to test createAPISubscription
        //instance.createAPISubscription(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAPISubscription', function() {
      it('should call deleteAPISubscription successfully', function(done) {
        //uncomment below and update the code to test deleteAPISubscription
        //instance.deleteAPISubscription(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAPISubscriptionById', function() {
      it('should call getAPISubscriptionById successfully', function(done) {
        //uncomment below and update the code to test getAPISubscriptionById
        //instance.getAPISubscriptionById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAPISubscriptions', function() {
      it('should call getAPISubscriptions successfully', function(done) {
        //uncomment below and update the code to test getAPISubscriptions
        //instance.getAPISubscriptions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEdgeDevicesOfAPISubscription', function() {
      it('should call getEdgeDevicesOfAPISubscription successfully', function(done) {
        //uncomment below and update the code to test getEdgeDevicesOfAPISubscription
        //instance.getEdgeDevicesOfAPISubscription(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeEdgeDevicesFromApiSubscription', function() {
      it('should call removeEdgeDevicesFromApiSubscription successfully', function(done) {
        //uncomment below and update the code to test removeEdgeDevicesFromApiSubscription
        //instance.removeEdgeDevicesFromApiSubscription(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceEdgeDevicesOfApiSubscription', function() {
      it('should call replaceEdgeDevicesOfApiSubscription successfully', function(done) {
        //uncomment below and update the code to test replaceEdgeDevicesOfApiSubscription
        //instance.replaceEdgeDevicesOfApiSubscription(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateAPISubscription', function() {
      it('should call updateAPISubscription successfully', function(done) {
        //uncomment below and update the code to test updateAPISubscription
        //instance.updateAPISubscription(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
