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
    define(['ApiClient', 'model/Links15', 'model/NestedIDHref', 'model/ProductLineItem', 'model/PurchaseOrderBase'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Links15'), require('./NestedIDHref'), require('./ProductLineItem'), require('./PurchaseOrderBase'));
  } else {
    // Browser globals (root is window)
    if (!root.NetilionApiDocumentation) {
      root.NetilionApiDocumentation = {};
    }
    root.NetilionApiDocumentation.PurchaseOrderResponse = factory(root.NetilionApiDocumentation.ApiClient, root.NetilionApiDocumentation.Links15, root.NetilionApiDocumentation.NestedIDHref, root.NetilionApiDocumentation.ProductLineItem, root.NetilionApiDocumentation.PurchaseOrderBase);
  }
}(this, function(ApiClient, Links15, NestedIDHref, ProductLineItem, PurchaseOrderBase) {
  'use strict';




  /**
   * The PurchaseOrderResponse model module.
   * @module model/PurchaseOrderResponse
   * @version 01.00.00
   */

  /**
   * Constructs a new <code>PurchaseOrderResponse</code>.
   * @alias module:model/PurchaseOrderResponse
   * @class
   * @extends module:model/PurchaseOrderBase
   * @param _number {String} 
   * @param name {String} 
   * @param sender {module:model/NestedIDHref} 
   * @param receiver {module:model/NestedIDHref} 
   */
  var exports = function(_number, name, sender, receiver) {
    var _this = this;
    PurchaseOrderBase.call(_this, _number, name, sender, receiver);







  };

  /**
   * Constructs a <code>PurchaseOrderResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PurchaseOrderResponse} obj Optional instance to populate.
   * @return {module:model/PurchaseOrderResponse} The populated <code>PurchaseOrderResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      PurchaseOrderBase.constructFromObject(data, obj);
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = NestedIDHref.constructFromObject(data['status']);
      }
      if (data.hasOwnProperty('sender')) {
        obj['sender'] = NestedIDHref.constructFromObject(data['sender']);
      }
      if (data.hasOwnProperty('receiver')) {
        obj['receiver'] = NestedIDHref.constructFromObject(data['receiver']);
      }
      if (data.hasOwnProperty('quotation')) {
        obj['quotation'] = NestedIDHref.constructFromObject(data['quotation']);
      }
      if (data.hasOwnProperty('line_items')) {
        obj['line_items'] = ApiClient.convertToType(data['line_items'], [ProductLineItem]);
      }
      if (data.hasOwnProperty('links')) {
        obj['links'] = Links15.constructFromObject(data['links']);
      }
    }
    return obj;
  }

  exports.prototype = Object.create(PurchaseOrderBase.prototype);
  exports.prototype.constructor = exports;

  /**
   * Id of object
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {module:model/NestedIDHref} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {module:model/NestedIDHref} sender
   */
  exports.prototype['sender'] = undefined;
  /**
   * @member {module:model/NestedIDHref} receiver
   */
  exports.prototype['receiver'] = undefined;
  /**
   * @member {module:model/NestedIDHref} quotation
   */
  exports.prototype['quotation'] = undefined;
  /**
   * @member {Array.<module:model/ProductLineItem>} line_items
   */
  exports.prototype['line_items'] = undefined;
  /**
   * @member {module:model/Links15} links
   */
  exports.prototype['links'] = undefined;



  return exports;
}));


