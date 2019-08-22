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
    define(['ApiClient', 'model/InstrumentationBase', 'model/NestedID'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InstrumentationBase'), require('./NestedID'));
  } else {
    // Browser globals (root is window)
    if (!root.NetilionApiDocumentation) {
      root.NetilionApiDocumentation = {};
    }
    root.NetilionApiDocumentation.InstrumentationRequest = factory(root.NetilionApiDocumentation.ApiClient, root.NetilionApiDocumentation.InstrumentationBase, root.NetilionApiDocumentation.NestedID);
  }
}(this, function(ApiClient, InstrumentationBase, NestedID) {
  'use strict';




  /**
   * The InstrumentationRequest model module.
   * @module model/InstrumentationRequest
   * @version 01.00.00
   */

  /**
   * Constructs a new <code>InstrumentationRequest</code>.
   * @alias module:model/InstrumentationRequest
   * @class
   * @extends module:model/InstrumentationBase
   */
  var exports = function() {
    var _this = this;
    InstrumentationBase.call(_this);




  };

  /**
   * Constructs a <code>InstrumentationRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InstrumentationRequest} obj Optional instance to populate.
   * @return {module:model/InstrumentationRequest} The populated <code>InstrumentationRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      InstrumentationBase.constructFromObject(data, obj);
      if (data.hasOwnProperty('status')) {
        obj['status'] = NestedID.constructFromObject(data['status']);
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = NestedID.constructFromObject(data['type']);
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

  exports.prototype = Object.create(InstrumentationBase.prototype);
  exports.prototype.constructor = exports;

  /**
   * @member {module:model/NestedID} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {module:model/NestedID} type
   */
  exports.prototype['type'] = undefined;
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


