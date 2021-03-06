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
    root.NetilionApiDocumentation.AssetHealthConditionsRequestHealthConditions = factory(root.NetilionApiDocumentation.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AssetHealthConditionsRequestHealthConditions model module.
   * @module model/AssetHealthConditionsRequestHealthConditions
   * @version 01.00.00
   */

  /**
   * Constructs a new <code>AssetHealthConditionsRequestHealthConditions</code>.
   * @alias module:model/AssetHealthConditionsRequestHealthConditions
   * @class
   * @param id {Number} Id of the cause
   */
  var exports = function(id) {
    var _this = this;

    _this['id'] = id;


  };

  /**
   * Constructs a <code>AssetHealthConditionsRequestHealthConditions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AssetHealthConditionsRequestHealthConditions} obj Optional instance to populate.
   * @return {module:model/AssetHealthConditionsRequestHealthConditions} The populated <code>AssetHealthConditionsRequestHealthConditions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('channel')) {
        obj['channel'] = ApiClient.convertToType(data['channel'], 'String');
      }
      if (data.hasOwnProperty('module')) {
        obj['module'] = ApiClient.convertToType(data['module'], 'String');
      }
    }
    return obj;
  }

  /**
   * Id of the cause
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * channel for the cause
   * @member {String} channel
   */
  exports.prototype['channel'] = undefined;
  /**
   * module for the cause
   * @member {String} module
   */
  exports.prototype['module'] = undefined;



  return exports;
}));


