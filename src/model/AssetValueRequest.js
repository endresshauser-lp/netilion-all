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
    define(['ApiClient', 'model/AssetValueRequestData', 'model/NestedIDCode'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AssetValueRequestData'), require('./NestedIDCode'));
  } else {
    // Browser globals (root is window)
    if (!root.NetilionApiDocumentation) {
      root.NetilionApiDocumentation = {};
    }
    root.NetilionApiDocumentation.AssetValueRequest = factory(root.NetilionApiDocumentation.ApiClient, root.NetilionApiDocumentation.AssetValueRequestData, root.NetilionApiDocumentation.NestedIDCode);
  }
}(this, function(ApiClient, AssetValueRequestData, NestedIDCode) {
  'use strict';




  /**
   * The AssetValueRequest model module.
   * @module model/AssetValueRequest
   * @version 01.00.00
   */

  /**
   * Constructs a new <code>AssetValueRequest</code>.
   * @alias module:model/AssetValueRequest
   * @class
   * @param key {String} 
   * @param unit {module:model/NestedIDCode} 
   */
  var exports = function(key, unit) {
    var _this = this;

    _this['key'] = key;
    _this['unit'] = unit;


  };

  /**
   * Constructs a <code>AssetValueRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AssetValueRequest} obj Optional instance to populate.
   * @return {module:model/AssetValueRequest} The populated <code>AssetValueRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('key')) {
        obj['key'] = ApiClient.convertToType(data['key'], 'String');
      }
      if (data.hasOwnProperty('unit')) {
        obj['unit'] = NestedIDCode.constructFromObject(data['unit']);
      }
      if (data.hasOwnProperty('group')) {
        obj['group'] = ApiClient.convertToType(data['group'], 'String');
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [AssetValueRequestData]);
      }
    }
    return obj;
  }

  /**
   * @member {String} key
   */
  exports.prototype['key'] = undefined;
  /**
   * @member {module:model/NestedIDCode} unit
   */
  exports.prototype['unit'] = undefined;
  /**
   * @member {String} group
   */
  exports.prototype['group'] = undefined;
  /**
   * @member {Array.<module:model/AssetValueRequestData>} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


