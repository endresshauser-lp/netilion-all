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
    root.NetilionApiDocumentation.APIKeyBase = factory(root.NetilionApiDocumentation.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The APIKeyBase model module.
   * @module model/APIKeyBase
   * @version 01.00.00
   */

  /**
   * Constructs a new <code>APIKeyBase</code>.
   * @alias module:model/APIKeyBase
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>APIKeyBase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/APIKeyBase} obj Optional instance to populate.
   * @return {module:model/APIKeyBase} The populated <code>APIKeyBase</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('valid_from')) {
        obj['valid_from'] = ApiClient.convertToType(data['valid_from'], 'String');
      }
      if (data.hasOwnProperty('valid_until')) {
        obj['valid_until'] = ApiClient.convertToType(data['valid_until'], 'String');
      }
      if (data.hasOwnProperty('disabled')) {
        obj['disabled'] = ApiClient.convertToType(data['disabled'], 'Boolean');
      }
      if (data.hasOwnProperty('authentication_type')) {
        obj['authentication_type'] = ApiClient.convertToType(data['authentication_type'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
    }
    return obj;
  }

  /**
   * Date must be in format '2016-01-01', cannot be set by non-admin users
   * @member {String} valid_from
   */
  exports.prototype['valid_from'] = undefined;
  /**
   * Date must be in format '2016-01-01', cannot be set by non-admin users
   * @member {String} valid_until
   */
  exports.prototype['valid_until'] = undefined;
  /**
   * disabled api keys cannot be used for requests
   * @member {Boolean} disabled
   * @default false
   */
  exports.prototype['disabled'] = false;
  /**
   * possible values are: any, oauth, basic_auth. Oauth is assigned per default
   * @member {String} authentication_type
   */
  exports.prototype['authentication_type'] = undefined;
  /**
   * Description of the APIKey
   * @member {String} description
   */
  exports.prototype['description'] = undefined;



  return exports;
}));

