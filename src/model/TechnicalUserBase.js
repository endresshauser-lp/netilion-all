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
    root.NetilionApiDocumentation.TechnicalUserBase = factory(root.NetilionApiDocumentation.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TechnicalUserBase model module.
   * @module model/TechnicalUserBase
   * @version 01.00.00
   */

  /**
   * Constructs a new <code>TechnicalUserBase</code>.
   * @alias module:model/TechnicalUserBase
   * @class
   * @param email {String} needs to be a valid email address
   */
  var exports = function(email) {
    var _this = this;

    _this['email'] = email;

  };

  /**
   * Constructs a <code>TechnicalUserBase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TechnicalUserBase} obj Optional instance to populate.
   * @return {module:model/TechnicalUserBase} The populated <code>TechnicalUserBase</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('disabled')) {
        obj['disabled'] = ApiClient.convertToType(data['disabled'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * needs to be a valid email address
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * Disables user from access. Can be set by the user, but cannot be undone without an administrator.
   * @member {Boolean} disabled
   * @default false
   */
  exports.prototype['disabled'] = false;



  return exports;
}));


