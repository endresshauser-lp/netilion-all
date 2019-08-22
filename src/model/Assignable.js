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
    root.NetilionApiDocumentation.Assignable = factory(root.NetilionApiDocumentation.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Assignable model module.
   * @module model/Assignable
   * @version 01.00.00
   */

  /**
   * Constructs a new <code>Assignable</code>.
   * @alias module:model/Assignable
   * @class
   * @param id {Number} id of the assignable
   * @param type {String} object type of the assignable with uppercase, can be 'User' or 'Usergroup'
   */
  var exports = function(id, type) {
    var _this = this;

    _this['id'] = id;
    _this['type'] = type;
  };

  /**
   * Constructs a <code>Assignable</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Assignable} obj Optional instance to populate.
   * @return {module:model/Assignable} The populated <code>Assignable</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }

  /**
   * id of the assignable
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * object type of the assignable with uppercase, can be 'User' or 'Usergroup'
   * @member {String} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));


