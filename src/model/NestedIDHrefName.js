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
    root.NetilionApiDocumentation.NestedIDHrefName = factory(root.NetilionApiDocumentation.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The NestedIDHrefName model module.
   * @module model/NestedIDHrefName
   * @version 01.00.00
   */

  /**
   * Constructs a new <code>NestedIDHrefName</code>.
   * @alias module:model/NestedIDHrefName
   * @class
   * @param id {Number} ID of the nested resources
   * @param href {String} href to the nested resource
   */
  var exports = function(id, href) {
    var _this = this;

    _this['id'] = id;
    _this['href'] = href;

  };

  /**
   * Constructs a <code>NestedIDHrefName</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NestedIDHrefName} obj Optional instance to populate.
   * @return {module:model/NestedIDHrefName} The populated <code>NestedIDHrefName</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('href')) {
        obj['href'] = ApiClient.convertToType(data['href'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * ID of the nested resources
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * href to the nested resource
   * @member {String} href
   */
  exports.prototype['href'] = undefined;
  /**
   * name of the nested resource
   * @member {String} name
   */
  exports.prototype['name'] = undefined;



  return exports;
}));


