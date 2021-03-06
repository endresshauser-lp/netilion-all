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
    define(['ApiClient', 'model/Links13', 'model/NestedIDHref', 'model/NodeBase'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Links13'), require('./NestedIDHref'), require('./NodeBase'));
  } else {
    // Browser globals (root is window)
    if (!root.NetilionApiDocumentation) {
      root.NetilionApiDocumentation = {};
    }
    root.NetilionApiDocumentation.NodeResponse = factory(root.NetilionApiDocumentation.ApiClient, root.NetilionApiDocumentation.Links13, root.NetilionApiDocumentation.NestedIDHref, root.NetilionApiDocumentation.NodeBase);
  }
}(this, function(ApiClient, Links13, NestedIDHref, NodeBase) {
  'use strict';




  /**
   * The NodeResponse model module.
   * @module model/NodeResponse
   * @version 01.00.00
   */

  /**
   * Constructs a new <code>NodeResponse</code>.
   * @alias module:model/NodeResponse
   * @class
   * @extends module:model/NodeBase
   */
  var exports = function() {
    var _this = this;
    NodeBase.call(_this);





  };

  /**
   * Constructs a <code>NodeResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NodeResponse} obj Optional instance to populate.
   * @return {module:model/NodeResponse} The populated <code>NodeResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      NodeBase.constructFromObject(data, obj);
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = NestedIDHref.constructFromObject(data['type']);
      }
      if (data.hasOwnProperty('parent')) {
        obj['parent'] = NestedIDHref.constructFromObject(data['parent']);
      }
      if (data.hasOwnProperty('tenant')) {
        obj['tenant'] = NestedIDHref.constructFromObject(data['tenant']);
      }
      if (data.hasOwnProperty('links')) {
        obj['links'] = Links13.constructFromObject(data['links']);
      }
    }
    return obj;
  }

  exports.prototype = Object.create(NodeBase.prototype);
  exports.prototype.constructor = exports;

  /**
   * Id of object
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {module:model/NestedIDHref} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {module:model/NestedIDHref} parent
   */
  exports.prototype['parent'] = undefined;
  /**
   * @member {module:model/NestedIDHref} tenant
   */
  exports.prototype['tenant'] = undefined;
  /**
   * @member {module:model/Links13} links
   */
  exports.prototype['links'] = undefined;



  return exports;
}));


