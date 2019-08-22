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
    define(['ApiClient', 'model/NestedID', 'model/RequestForQuotationStatusBase'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NestedID'), require('./RequestForQuotationStatusBase'));
  } else {
    // Browser globals (root is window)
    if (!root.NetilionApiDocumentation) {
      root.NetilionApiDocumentation = {};
    }
    root.NetilionApiDocumentation.RequestForQuotationStatusRequest = factory(root.NetilionApiDocumentation.ApiClient, root.NetilionApiDocumentation.NestedID, root.NetilionApiDocumentation.RequestForQuotationStatusBase);
  }
}(this, function(ApiClient, NestedID, RequestForQuotationStatusBase) {
  'use strict';




  /**
   * The RequestForQuotationStatusRequest model module.
   * @module model/RequestForQuotationStatusRequest
   * @version 01.00.00
   */

  /**
   * Constructs a new <code>RequestForQuotationStatusRequest</code>.
   * @alias module:model/RequestForQuotationStatusRequest
   * @class
   * @extends module:model/RequestForQuotationStatusBase
   * @param name {String} Supports translations. Whitespaces are trimmed.
   */
  var exports = function(name) {
    var _this = this;
    RequestForQuotationStatusBase.call(_this, name);

  };

  /**
   * Constructs a <code>RequestForQuotationStatusRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RequestForQuotationStatusRequest} obj Optional instance to populate.
   * @return {module:model/RequestForQuotationStatusRequest} The populated <code>RequestForQuotationStatusRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      RequestForQuotationStatusBase.constructFromObject(data, obj);
      if (data.hasOwnProperty('tenant')) {
        obj['tenant'] = NestedID.constructFromObject(data['tenant']);
      }
    }
    return obj;
  }

  exports.prototype = Object.create(RequestForQuotationStatusBase.prototype);
  exports.prototype.constructor = exports;

  /**
   * @member {module:model/NestedID} tenant
   */
  exports.prototype['tenant'] = undefined;



  return exports;
}));

