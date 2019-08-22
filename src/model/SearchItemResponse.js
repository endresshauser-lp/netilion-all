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
    root.NetilionApiDocumentation.SearchItemResponse = factory(root.NetilionApiDocumentation.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SearchItemResponse model module.
   * @module model/SearchItemResponse
   * @version 01.00.00
   */

  /**
   * Constructs a new <code>SearchItemResponse</code>.
   * @alias module:model/SearchItemResponse
   * @class
   * @param id {Number} Id of object
   * @param type {String} type of object. Possible value asset, instrumentation, node.
   * @param title {String} title of object
   * @param description {String} description of object
   */
  var exports = function(id, type, title, description) {
    var _this = this;

    _this['id'] = id;
    _this['type'] = type;
    _this['title'] = title;
    _this['description'] = description;
  };

  /**
   * Constructs a <code>SearchItemResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SearchItemResponse} obj Optional instance to populate.
   * @return {module:model/SearchItemResponse} The populated <code>SearchItemResponse</code> instance.
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
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
    }
    return obj;
  }

  /**
   * Id of object
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * type of object. Possible value asset, instrumentation, node.
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * title of object
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * description of object
   * @member {String} description
   */
  exports.prototype['description'] = undefined;



  return exports;
}));

