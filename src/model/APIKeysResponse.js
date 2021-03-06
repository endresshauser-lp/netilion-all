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
    define(['ApiClient', 'model/APIKeyResponse', 'model/Pagination'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./APIKeyResponse'), require('./Pagination'));
  } else {
    // Browser globals (root is window)
    if (!root.NetilionApiDocumentation) {
      root.NetilionApiDocumentation = {};
    }
    root.NetilionApiDocumentation.APIKeysResponse = factory(root.NetilionApiDocumentation.ApiClient, root.NetilionApiDocumentation.APIKeyResponse, root.NetilionApiDocumentation.Pagination);
  }
}(this, function(ApiClient, APIKeyResponse, Pagination) {
  'use strict';




  /**
   * The APIKeysResponse model module.
   * @module model/APIKeysResponse
   * @version 01.00.00
   */

  /**
   * Constructs a new <code>APIKeysResponse</code>.
   * @alias module:model/APIKeysResponse
   * @class
   * @param apiKeys {Array.<module:model/APIKeyResponse>} 
   * @param pagination {module:model/Pagination} 
   */
  var exports = function(apiKeys, pagination) {
    var _this = this;

    _this['api_keys'] = apiKeys;
    _this['pagination'] = pagination;
  };

  /**
   * Constructs a <code>APIKeysResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/APIKeysResponse} obj Optional instance to populate.
   * @return {module:model/APIKeysResponse} The populated <code>APIKeysResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('api_keys')) {
        obj['api_keys'] = ApiClient.convertToType(data['api_keys'], [APIKeyResponse]);
      }
      if (data.hasOwnProperty('pagination')) {
        obj['pagination'] = Pagination.constructFromObject(data['pagination']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/APIKeyResponse>} api_keys
   */
  exports.prototype['api_keys'] = undefined;
  /**
   * @member {module:model/Pagination} pagination
   */
  exports.prototype['pagination'] = undefined;



  return exports;
}));


