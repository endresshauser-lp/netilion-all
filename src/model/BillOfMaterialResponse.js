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
    define(['ApiClient', 'model/BillOfMaterialBase', 'model/Links2'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BillOfMaterialBase'), require('./Links2'));
  } else {
    // Browser globals (root is window)
    if (!root.NetilionApiDocumentation) {
      root.NetilionApiDocumentation = {};
    }
    root.NetilionApiDocumentation.BillOfMaterialResponse = factory(root.NetilionApiDocumentation.ApiClient, root.NetilionApiDocumentation.BillOfMaterialBase, root.NetilionApiDocumentation.Links2);
  }
}(this, function(ApiClient, BillOfMaterialBase, Links2) {
  'use strict';




  /**
   * The BillOfMaterialResponse model module.
   * @module model/BillOfMaterialResponse
   * @version 01.00.00
   */

  /**
   * Constructs a new <code>BillOfMaterialResponse</code>.
   * @alias module:model/BillOfMaterialResponse
   * @class
   * @extends module:model/BillOfMaterialBase
   */
  var exports = function() {
    var _this = this;
    BillOfMaterialBase.call(_this);


  };

  /**
   * Constructs a <code>BillOfMaterialResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BillOfMaterialResponse} obj Optional instance to populate.
   * @return {module:model/BillOfMaterialResponse} The populated <code>BillOfMaterialResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      BillOfMaterialBase.constructFromObject(data, obj);
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('links')) {
        obj['links'] = Links2.constructFromObject(data['links']);
      }
    }
    return obj;
  }

  exports.prototype = Object.create(BillOfMaterialBase.prototype);
  exports.prototype.constructor = exports;

  /**
   * Id of object
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {module:model/Links2} links
   */
  exports.prototype['links'] = undefined;



  return exports;
}));


