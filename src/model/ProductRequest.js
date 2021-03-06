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
    define(['ApiClient', 'model/NestedID', 'model/ProductBase'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NestedID'), require('./ProductBase'));
  } else {
    // Browser globals (root is window)
    if (!root.NetilionApiDocumentation) {
      root.NetilionApiDocumentation = {};
    }
    root.NetilionApiDocumentation.ProductRequest = factory(root.NetilionApiDocumentation.ApiClient, root.NetilionApiDocumentation.NestedID, root.NetilionApiDocumentation.ProductBase);
  }
}(this, function(ApiClient, NestedID, ProductBase) {
  'use strict';




  /**
   * The ProductRequest model module.
   * @module model/ProductRequest
   * @version 01.00.00
   */

  /**
   * Constructs a new <code>ProductRequest</code>.
   * @alias module:model/ProductRequest
   * @class
   * @extends module:model/ProductBase
   */
  var exports = function() {
    var _this = this;
    ProductBase.call(_this);




  };

  /**
   * Constructs a <code>ProductRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductRequest} obj Optional instance to populate.
   * @return {module:model/ProductRequest} The populated <code>ProductRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      ProductBase.constructFromObject(data, obj);
      if (data.hasOwnProperty('manufacturer')) {
        obj['manufacturer'] = NestedID.constructFromObject(data['manufacturer']);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = NestedID.constructFromObject(data['status']);
      }
      if (data.hasOwnProperty('parent')) {
        obj['parent'] = NestedID.constructFromObject(data['parent']);
      }
      if (data.hasOwnProperty('tenant')) {
        obj['tenant'] = NestedID.constructFromObject(data['tenant']);
      }
    }
    return obj;
  }

  exports.prototype = Object.create(ProductBase.prototype);
  exports.prototype.constructor = exports;

  /**
   * @member {module:model/NestedID} manufacturer
   */
  exports.prototype['manufacturer'] = undefined;
  /**
   * @member {module:model/NestedID} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {module:model/NestedID} parent
   */
  exports.prototype['parent'] = undefined;
  /**
   * @member {module:model/NestedID} tenant
   */
  exports.prototype['tenant'] = undefined;



  return exports;
}));


