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
    define(['ApiClient', 'model/NestedIDHref', 'model/NestedIDUserNameHref', 'model/SubscriptionSeatBase'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NestedIDHref'), require('./NestedIDUserNameHref'), require('./SubscriptionSeatBase'));
  } else {
    // Browser globals (root is window)
    if (!root.NetilionApiDocumentation) {
      root.NetilionApiDocumentation = {};
    }
    root.NetilionApiDocumentation.SubscriptionSeatResponse = factory(root.NetilionApiDocumentation.ApiClient, root.NetilionApiDocumentation.NestedIDHref, root.NetilionApiDocumentation.NestedIDUserNameHref, root.NetilionApiDocumentation.SubscriptionSeatBase);
  }
}(this, function(ApiClient, NestedIDHref, NestedIDUserNameHref, SubscriptionSeatBase) {
  'use strict';




  /**
   * The SubscriptionSeatResponse model module.
   * @module model/SubscriptionSeatResponse
   * @version 01.00.00
   */

  /**
   * Constructs a new <code>SubscriptionSeatResponse</code>.
   * @alias module:model/SubscriptionSeatResponse
   * @class
   * @extends module:model/SubscriptionSeatBase
   */
  var exports = function() {
    var _this = this;
    SubscriptionSeatBase.call(_this);



  };

  /**
   * Constructs a <code>SubscriptionSeatResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubscriptionSeatResponse} obj Optional instance to populate.
   * @return {module:model/SubscriptionSeatResponse} The populated <code>SubscriptionSeatResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      SubscriptionSeatBase.constructFromObject(data, obj);
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('subscription')) {
        obj['subscription'] = NestedIDHref.constructFromObject(data['subscription']);
      }
      if (data.hasOwnProperty('user')) {
        obj['user'] = NestedIDUserNameHref.constructFromObject(data['user']);
      }
    }
    return obj;
  }

  exports.prototype = Object.create(SubscriptionSeatBase.prototype);
  exports.prototype.constructor = exports;

  /**
   * Id of object
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {module:model/NestedIDHref} subscription
   */
  exports.prototype['subscription'] = undefined;
  /**
   * @member {module:model/NestedIDUserNameHref} user
   */
  exports.prototype['user'] = undefined;



  return exports;
}));


