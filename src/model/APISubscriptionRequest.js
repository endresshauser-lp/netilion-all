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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/APISubscriptionBase', 'model/BillingAddressRequest', 'model/NestedID', 'model/ShippingAddressRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./APISubscriptionBase'), require('./BillingAddressRequest'), require('./NestedID'), require('./ShippingAddressRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.NetilionApiDocumentation) {
      root.NetilionApiDocumentation = {};
    }
    root.NetilionApiDocumentation.APISubscriptionRequest = factory(root.NetilionApiDocumentation.ApiClient, root.NetilionApiDocumentation.APISubscriptionBase, root.NetilionApiDocumentation.BillingAddressRequest, root.NetilionApiDocumentation.NestedID, root.NetilionApiDocumentation.ShippingAddressRequest);
  }
}(this, function(ApiClient, APISubscriptionBase, BillingAddressRequest, NestedID, ShippingAddressRequest) {
  'use strict';




  /**
   * The APISubscriptionRequest model module.
   * @module model/APISubscriptionRequest
   * @version 01.00.00
   */

  /**
   * Constructs a new <code>APISubscriptionRequest</code>.
   * @alias module:model/APISubscriptionRequest
   * @class
   * @extends module:model/APISubscriptionBase
   */
  var exports = function() {
    var _this = this;
    APISubscriptionBase.call(_this);




  };

  /**
   * Constructs a <code>APISubscriptionRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/APISubscriptionRequest} obj Optional instance to populate.
   * @return {module:model/APISubscriptionRequest} The populated <code>APISubscriptionRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      APISubscriptionBase.constructFromObject(data, obj);
      if (data.hasOwnProperty('user')) {
        obj['user'] = NestedID.constructFromObject(data['user']);
      }
      if (data.hasOwnProperty('client_application')) {
        obj['client_application'] = NestedID.constructFromObject(data['client_application']);
      }
      if (data.hasOwnProperty('billing_address')) {
        obj['billing_address'] = BillingAddressRequest.constructFromObject(data['billing_address']);
      }
      if (data.hasOwnProperty('shipping_address')) {
        obj['shipping_address'] = ShippingAddressRequest.constructFromObject(data['shipping_address']);
      }
    }
    return obj;
  }

  exports.prototype = Object.create(APISubscriptionBase.prototype);
  exports.prototype.constructor = exports;

  /**
   * @member {module:model/NestedID} user
   */
  exports.prototype['user'] = undefined;
  /**
   * @member {module:model/NestedID} client_application
   */
  exports.prototype['client_application'] = undefined;
  /**
   * @member {module:model/BillingAddressRequest} billing_address
   */
  exports.prototype['billing_address'] = undefined;
  /**
   * @member {module:model/ShippingAddressRequest} shipping_address
   */
  exports.prototype['shipping_address'] = undefined;



  return exports;
}));


