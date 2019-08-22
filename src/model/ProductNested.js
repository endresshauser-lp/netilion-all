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
    define(['ApiClient', 'model/CompanyNested'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CompanyNested'));
  } else {
    // Browser globals (root is window)
    if (!root.NetilionApiDocumentation) {
      root.NetilionApiDocumentation = {};
    }
    root.NetilionApiDocumentation.ProductNested = factory(root.NetilionApiDocumentation.ApiClient, root.NetilionApiDocumentation.CompanyNested);
  }
}(this, function(ApiClient, CompanyNested) {
  'use strict';




  /**
   * The ProductNested model module.
   * @module model/ProductNested
   * @version 01.00.00
   */

  /**
   * Constructs a new <code>ProductNested</code>.
   * @alias module:model/ProductNested
   * @class
   * @param id {Number} Id of object
   * @param href {String} Link to get product information
   * @param manufacturer {module:model/CompanyNested} 
   */
  var exports = function(id, href, manufacturer) {
    var _this = this;

    _this['id'] = id;


    _this['href'] = href;
    _this['manufacturer'] = manufacturer;
  };

  /**
   * Constructs a <code>ProductNested</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductNested} obj Optional instance to populate.
   * @return {module:model/ProductNested} The populated <code>ProductNested</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('product_code')) {
        obj['product_code'] = ApiClient.convertToType(data['product_code'], 'String');
      }
      if (data.hasOwnProperty('href')) {
        obj['href'] = ApiClient.convertToType(data['href'], 'String');
      }
      if (data.hasOwnProperty('manufacturer')) {
        obj['manufacturer'] = CompanyNested.constructFromObject(data['manufacturer']);
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
   * product name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * product code
   * @member {String} product_code
   */
  exports.prototype['product_code'] = undefined;
  /**
   * Link to get product information
   * @member {String} href
   */
  exports.prototype['href'] = undefined;
  /**
   * @member {module:model/CompanyNested} manufacturer
   */
  exports.prototype['manufacturer'] = undefined;



  return exports;
}));


