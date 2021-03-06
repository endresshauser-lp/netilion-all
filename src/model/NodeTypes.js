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
    define(['ApiClient', 'model/NodeTypeResponse', 'model/Pagination'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NodeTypeResponse'), require('./Pagination'));
  } else {
    // Browser globals (root is window)
    if (!root.NetilionApiDocumentation) {
      root.NetilionApiDocumentation = {};
    }
    root.NetilionApiDocumentation.NodeTypes = factory(root.NetilionApiDocumentation.ApiClient, root.NetilionApiDocumentation.NodeTypeResponse, root.NetilionApiDocumentation.Pagination);
  }
}(this, function(ApiClient, NodeTypeResponse, Pagination) {
  'use strict';




  /**
   * The NodeTypes model module.
   * @module model/NodeTypes
   * @version 01.00.00
   */

  /**
   * Constructs a new <code>NodeTypes</code>.
   * @alias module:model/NodeTypes
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>NodeTypes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NodeTypes} obj Optional instance to populate.
   * @return {module:model/NodeTypes} The populated <code>NodeTypes</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('node_types')) {
        obj['node_types'] = ApiClient.convertToType(data['node_types'], [NodeTypeResponse]);
      }
      if (data.hasOwnProperty('pagination')) {
        obj['pagination'] = Pagination.constructFromObject(data['pagination']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/NodeTypeResponse>} node_types
   */
  exports.prototype['node_types'] = undefined;
  /**
   * @member {module:model/Pagination} pagination
   */
  exports.prototype['pagination'] = undefined;



  return exports;
}));


