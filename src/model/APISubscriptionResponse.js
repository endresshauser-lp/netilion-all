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
    define(['ApiClient', 'model/APISubscriptionBase', 'model/BillingAddressResponse', 'model/Links', 'model/NestedIDHref', 'model/NestedIDHrefName', 'model/ShippingAddressResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./APISubscriptionBase'), require('./BillingAddressResponse'), require('./Links'), require('./NestedIDHref'), require('./NestedIDHrefName'), require('./ShippingAddressResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.NetilionApiDocumentation) {
      root.NetilionApiDocumentation = {};
    }
    root.NetilionApiDocumentation.APISubscriptionResponse = factory(root.NetilionApiDocumentation.ApiClient, root.NetilionApiDocumentation.APISubscriptionBase, root.NetilionApiDocumentation.BillingAddressResponse, root.NetilionApiDocumentation.Links, root.NetilionApiDocumentation.NestedIDHref, root.NetilionApiDocumentation.NestedIDHrefName, root.NetilionApiDocumentation.ShippingAddressResponse);
  }
}(this, function(ApiClient, APISubscriptionBase, BillingAddressResponse, Links, NestedIDHref, NestedIDHrefName, ShippingAddressResponse) {
  'use strict';




  /**
   * The APISubscriptionResponse model module.
   * @module model/APISubscriptionResponse
   * @version 01.00.00
   */

  /**
   * Constructs a new <code>APISubscriptionResponse</code>.
   * @alias module:model/APISubscriptionResponse
   * @class
   * @extends module:model/APISubscriptionBase
   */
  var exports = function() {
    var _this = this;
    APISubscriptionBase.call(_this);






  };

  /**
   * Constructs a <code>APISubscriptionResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/APISubscriptionResponse} obj Optional instance to populate.
   * @return {module:model/APISubscriptionResponse} The populated <code>APISubscriptionResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      APISubscriptionBase.constructFromObject(data, obj);
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('user')) {
        obj['user'] = NestedIDHref.constructFromObject(data['user']);
      }
      if (data.hasOwnProperty('client_application')) {
        obj['client_application'] = NestedIDHrefName.constructFromObject(data['client_application']);
      }
      if (data.hasOwnProperty('billing_address')) {
        obj['billing_address'] = BillingAddressResponse.constructFromObject(data['billing_address']);
      }
      if (data.hasOwnProperty('shipping_address')) {
        obj['shipping_address'] = ShippingAddressResponse.constructFromObject(data['shipping_address']);
      }
      if (data.hasOwnProperty('links')) {
        obj['links'] = Links.constructFromObject(data['links']);
      }
    }
    return obj;
  }

  exports.prototype = Object.create(APISubscriptionBase.prototype);
  exports.prototype.constructor = exports;

  /**
   * Id of object
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {module:model/NestedIDHref} user
   */
  exports.prototype['user'] = undefined;
  /**
   * @member {module:model/NestedIDHrefName} client_application
   */
  exports.prototype['client_application'] = undefined;
  /**
   * @member {module:model/BillingAddressResponse} billing_address
   */
  exports.prototype['billing_address'] = undefined;
  /**
   * @member {module:model/ShippingAddressResponse} shipping_address
   */
  exports.prototype['shipping_address'] = undefined;
  /**
   * @member {module:model/Links} links
   */
  exports.prototype['links'] = undefined;



  return exports;
}));


