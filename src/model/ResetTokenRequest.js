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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.NetilionApiDocumentation) {
      root.NetilionApiDocumentation = {};
    }
    root.NetilionApiDocumentation.ResetTokenRequest = factory(root.NetilionApiDocumentation.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ResetTokenRequest model module.
   * @module model/ResetTokenRequest
   * @version 01.00.00
   */

  /**
   * Constructs a new <code>ResetTokenRequest</code>.
   * @alias module:model/ResetTokenRequest
   * @class
   * @param email {String} email of the user
   */
  var exports = function(email) {
    var _this = this;

    _this['email'] = email;

  };

  /**
   * Constructs a <code>ResetTokenRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResetTokenRequest} obj Optional instance to populate.
   * @return {module:model/ResetTokenRequest} The populated <code>ResetTokenRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('redirect_api_key')) {
        obj['redirect_api_key'] = ApiClient.convertToType(data['redirect_api_key'], 'String');
      }
    }
    return obj;
  }

  /**
   * email of the user
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * identifier for requesting application
   * @member {String} redirect_api_key
   */
  exports.prototype['redirect_api_key'] = undefined;



  return exports;
}));

