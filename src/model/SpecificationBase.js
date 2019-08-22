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
    root.NetilionApiDocumentation.SpecificationBase = factory(root.NetilionApiDocumentation.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SpecificationBase model module.
   * @module model/SpecificationBase
   * @version 01.00.00
   */

  /**
   * Constructs a new <code>SpecificationBase</code>.
   * @alias module:model/SpecificationBase
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>SpecificationBase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SpecificationBase} obj Optional instance to populate.
   * @return {module:model/SpecificationBase} The populated <code>SpecificationBase</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
      if (data.hasOwnProperty('unit')) {
        obj['unit'] = ApiClient.convertToType(data['unit'], 'String');
      }
      if (data.hasOwnProperty('source_timestamp')) {
        obj['source_timestamp'] = ApiClient.convertToType(data['source_timestamp'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} value
   */
  exports.prototype['value'] = undefined;
  /**
   * @member {String} unit
   */
  exports.prototype['unit'] = undefined;
  /**
   * source time stamp of the value
   * @member {String} source_timestamp
   */
  exports.prototype['source_timestamp'] = undefined;



  return exports;
}));


