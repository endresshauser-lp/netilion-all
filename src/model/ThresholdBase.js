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
    root.NetilionApiDocumentation.ThresholdBase = factory(root.NetilionApiDocumentation.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ThresholdBase model module.
   * @module model/ThresholdBase
   * @version 01.00.00
   */

  /**
   * Constructs a new <code>ThresholdBase</code>.
   * @alias module:model/ThresholdBase
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>ThresholdBase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ThresholdBase} obj Optional instance to populate.
   * @return {module:model/ThresholdBase} The populated <code>ThresholdBase</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('key')) {
        obj['key'] = ApiClient.convertToType(data['key'], 'String');
      }
      if (data.hasOwnProperty('low_low')) {
        obj['low_low'] = ApiClient.convertToType(data['low_low'], 'Number');
      }
      if (data.hasOwnProperty('low')) {
        obj['low'] = ApiClient.convertToType(data['low'], 'Number');
      }
      if (data.hasOwnProperty('high')) {
        obj['high'] = ApiClient.convertToType(data['high'], 'Number');
      }
      if (data.hasOwnProperty('high_high')) {
        obj['high_high'] = ApiClient.convertToType(data['high_high'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Threshold key. The value must be unique for the instrumentation id
   * @member {String} key
   */
  exports.prototype['key'] = undefined;
  /**
   * the lowest critical threshold. Can be negativ and decimal. Must be the lowest threshold limit
   * @member {Number} low_low
   */
  exports.prototype['low_low'] = undefined;
  /**
   * the lowest warning threshold. Can be negativ and decimal. Must be the second lowest threshold limit
   * @member {Number} low
   */
  exports.prototype['low'] = undefined;
  /**
   * the highest warning threshold. Can be negativ and decimal. Must be the second threshold limit
   * @member {Number} high
   */
  exports.prototype['high'] = undefined;
  /**
   * the highest critical threshold. Can be negativ and decimal. Must be the highest threshold limit
   * @member {Number} high_high
   */
  exports.prototype['high_high'] = undefined;



  return exports;
}));


