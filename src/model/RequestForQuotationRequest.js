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
    define(['ApiClient', 'model/NestedID', 'model/RequestForQuotationBase'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NestedID'), require('./RequestForQuotationBase'));
  } else {
    // Browser globals (root is window)
    if (!root.NetilionApiDocumentation) {
      root.NetilionApiDocumentation = {};
    }
    root.NetilionApiDocumentation.RequestForQuotationRequest = factory(root.NetilionApiDocumentation.ApiClient, root.NetilionApiDocumentation.NestedID, root.NetilionApiDocumentation.RequestForQuotationBase);
  }
}(this, function(ApiClient, NestedID, RequestForQuotationBase) {
  'use strict';




  /**
   * The RequestForQuotationRequest model module.
   * @module model/RequestForQuotationRequest
   * @version 01.00.00
   */

  /**
   * Constructs a new <code>RequestForQuotationRequest</code>.
   * @alias module:model/RequestForQuotationRequest
   * @class
   * @extends module:model/RequestForQuotationBase
   */
  var exports = function() {
    var _this = this;
    RequestForQuotationBase.call(_this);
  };

  /**
   * Constructs a <code>RequestForQuotationRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RequestForQuotationRequest} obj Optional instance to populate.
   * @return {module:model/RequestForQuotationRequest} The populated <code>RequestForQuotationRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      RequestForQuotationBase.constructFromObject(data, obj);
    }
    return obj;
  }

  exports.prototype = Object.create(RequestForQuotationBase.prototype);
  exports.prototype.constructor = exports;




  return exports;
}));


