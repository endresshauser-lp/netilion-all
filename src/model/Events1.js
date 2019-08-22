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
    define(['ApiClient', 'model/NestedID'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NestedID'));
  } else {
    // Browser globals (root is window)
    if (!root.NetilionApiDocumentation) {
      root.NetilionApiDocumentation = {};
    }
    root.NetilionApiDocumentation.Events1 = factory(root.NetilionApiDocumentation.ApiClient, root.NetilionApiDocumentation.NestedID);
  }
}(this, function(ApiClient, NestedID) {
  'use strict';




  /**
   * The Events1 model module.
   * @module model/Events1
   * @version 01.00.00
   */

  /**
   * Constructs a new <code>Events1</code>.
   * @alias module:model/Events1
   * @class
   * @param events {Array.<module:model/NestedID>} 
   */
  var exports = function(events) {
    var _this = this;

    _this['events'] = events;
  };

  /**
   * Constructs a <code>Events1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Events1} obj Optional instance to populate.
   * @return {module:model/Events1} The populated <code>Events1</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('events')) {
        obj['events'] = ApiClient.convertToType(data['events'], [NestedID]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/NestedID>} events
   */
  exports.prototype['events'] = undefined;



  return exports;
}));


