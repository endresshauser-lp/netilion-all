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
    define(['ApiClient', 'model/CompanyResponse', 'model/Pagination'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CompanyResponse'), require('./Pagination'));
  } else {
    // Browser globals (root is window)
    if (!root.NetilionApiDocumentation) {
      root.NetilionApiDocumentation = {};
    }
    root.NetilionApiDocumentation.Companies1 = factory(root.NetilionApiDocumentation.ApiClient, root.NetilionApiDocumentation.CompanyResponse, root.NetilionApiDocumentation.Pagination);
  }
}(this, function(ApiClient, CompanyResponse, Pagination) {
  'use strict';




  /**
   * The Companies1 model module.
   * @module model/Companies1
   * @version 01.00.00
   */

  /**
   * Constructs a new <code>Companies1</code>.
   * @alias module:model/Companies1
   * @class
   * @param companies {Array.<module:model/CompanyResponse>} 
   * @param pagination {module:model/Pagination} 
   */
  var exports = function(companies, pagination) {
    var _this = this;

    _this['companies'] = companies;
    _this['pagination'] = pagination;
  };

  /**
   * Constructs a <code>Companies1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Companies1} obj Optional instance to populate.
   * @return {module:model/Companies1} The populated <code>Companies1</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('companies')) {
        obj['companies'] = ApiClient.convertToType(data['companies'], [CompanyResponse]);
      }
      if (data.hasOwnProperty('pagination')) {
        obj['pagination'] = Pagination.constructFromObject(data['pagination']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/CompanyResponse>} companies
   */
  exports.prototype['companies'] = undefined;
  /**
   * @member {module:model/Pagination} pagination
   */
  exports.prototype['pagination'] = undefined;



  return exports;
}));

