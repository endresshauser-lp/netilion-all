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
    define(['ApiClient', 'model/Pagination', 'model/PermissionResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Pagination'), require('./PermissionResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.NetilionApiDocumentation) {
      root.NetilionApiDocumentation = {};
    }
    root.NetilionApiDocumentation.Permissions = factory(root.NetilionApiDocumentation.ApiClient, root.NetilionApiDocumentation.Pagination, root.NetilionApiDocumentation.PermissionResponse);
  }
}(this, function(ApiClient, Pagination, PermissionResponse) {
  'use strict';




  /**
   * The Permissions model module.
   * @module model/Permissions
   * @version 01.00.00
   */

  /**
   * Constructs a new <code>Permissions</code>.
   * @alias module:model/Permissions
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Permissions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Permissions} obj Optional instance to populate.
   * @return {module:model/Permissions} The populated <code>Permissions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('permissions')) {
        obj['permissions'] = ApiClient.convertToType(data['permissions'], [PermissionResponse]);
      }
      if (data.hasOwnProperty('pagination')) {
        obj['pagination'] = Pagination.constructFromObject(data['pagination']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/PermissionResponse>} permissions
   */
  exports.prototype['permissions'] = undefined;
  /**
   * @member {module:model/Pagination} pagination
   */
  exports.prototype['pagination'] = undefined;



  return exports;
}));


