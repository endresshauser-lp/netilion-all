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
    define(['ApiClient', 'model/DeliveryStatusBase', 'model/NestedIDHref'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DeliveryStatusBase'), require('./NestedIDHref'));
  } else {
    // Browser globals (root is window)
    if (!root.NetilionApiDocumentation) {
      root.NetilionApiDocumentation = {};
    }
    root.NetilionApiDocumentation.DeliveryStatusResponse = factory(root.NetilionApiDocumentation.ApiClient, root.NetilionApiDocumentation.DeliveryStatusBase, root.NetilionApiDocumentation.NestedIDHref);
  }
}(this, function(ApiClient, DeliveryStatusBase, NestedIDHref) {
  'use strict';




  /**
   * The DeliveryStatusResponse model module.
   * @module model/DeliveryStatusResponse
   * @version 01.00.00
   */

  /**
   * Constructs a new <code>DeliveryStatusResponse</code>.
   * @alias module:model/DeliveryStatusResponse
   * @class
   * @extends module:model/DeliveryStatusBase
   * @param name {String} Supports translations. Whitespaces are trimmed.
   */
  var exports = function(name) {
    var _this = this;
    DeliveryStatusBase.call(_this, name);


  };

  /**
   * Constructs a <code>DeliveryStatusResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeliveryStatusResponse} obj Optional instance to populate.
   * @return {module:model/DeliveryStatusResponse} The populated <code>DeliveryStatusResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      DeliveryStatusBase.constructFromObject(data, obj);
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('tenant')) {
        obj['tenant'] = NestedIDHref.constructFromObject(data['tenant']);
      }
    }
    return obj;
  }

  exports.prototype = Object.create(DeliveryStatusBase.prototype);
  exports.prototype.constructor = exports;

  /**
   * Id of object
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {module:model/NestedIDHref} tenant
   */
  exports.prototype['tenant'] = undefined;



  return exports;
}));

