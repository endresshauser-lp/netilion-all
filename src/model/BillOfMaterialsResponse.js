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
    define(['ApiClient', 'model/BillOfMaterialResponse', 'model/Pagination'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BillOfMaterialResponse'), require('./Pagination'));
  } else {
    // Browser globals (root is window)
    if (!root.NetilionApiDocumentation) {
      root.NetilionApiDocumentation = {};
    }
    root.NetilionApiDocumentation.BillOfMaterialsResponse = factory(root.NetilionApiDocumentation.ApiClient, root.NetilionApiDocumentation.BillOfMaterialResponse, root.NetilionApiDocumentation.Pagination);
  }
}(this, function(ApiClient, BillOfMaterialResponse, Pagination) {
  'use strict';




  /**
   * The BillOfMaterialsResponse model module.
   * @module model/BillOfMaterialsResponse
   * @version 01.00.00
   */

  /**
   * Constructs a new <code>BillOfMaterialsResponse</code>.
   * @alias module:model/BillOfMaterialsResponse
   * @class
   * @param billOfMaterials {Array.<module:model/BillOfMaterialResponse>} 
   * @param pagination {module:model/Pagination} 
   */
  var exports = function(billOfMaterials, pagination) {
    var _this = this;

    _this['bill_of_materials'] = billOfMaterials;
    _this['pagination'] = pagination;
  };

  /**
   * Constructs a <code>BillOfMaterialsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BillOfMaterialsResponse} obj Optional instance to populate.
   * @return {module:model/BillOfMaterialsResponse} The populated <code>BillOfMaterialsResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('bill_of_materials')) {
        obj['bill_of_materials'] = ApiClient.convertToType(data['bill_of_materials'], [BillOfMaterialResponse]);
      }
      if (data.hasOwnProperty('pagination')) {
        obj['pagination'] = Pagination.constructFromObject(data['pagination']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/BillOfMaterialResponse>} bill_of_materials
   */
  exports.prototype['bill_of_materials'] = undefined;
  /**
   * @member {module:model/Pagination} pagination
   */
  exports.prototype['pagination'] = undefined;



  return exports;
}));

