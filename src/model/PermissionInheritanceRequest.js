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
    define(['ApiClient', 'model/PermissionInheritable', 'model/PermissionInheritanceBase'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PermissionInheritable'), require('./PermissionInheritanceBase'));
  } else {
    // Browser globals (root is window)
    if (!root.NetilionApiDocumentation) {
      root.NetilionApiDocumentation = {};
    }
    root.NetilionApiDocumentation.PermissionInheritanceRequest = factory(root.NetilionApiDocumentation.ApiClient, root.NetilionApiDocumentation.PermissionInheritable, root.NetilionApiDocumentation.PermissionInheritanceBase);
  }
}(this, function(ApiClient, PermissionInheritable, PermissionInheritanceBase) {
  'use strict';




  /**
   * The PermissionInheritanceRequest model module.
   * @module model/PermissionInheritanceRequest
   * @version 01.00.00
   */

  /**
   * Constructs a new <code>PermissionInheritanceRequest</code>.
   * @alias module:model/PermissionInheritanceRequest
   * @class
   * @extends module:model/PermissionInheritanceBase
   */
  var exports = function() {
    var _this = this;
    PermissionInheritanceBase.call(_this);
  };

  /**
   * Constructs a <code>PermissionInheritanceRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PermissionInheritanceRequest} obj Optional instance to populate.
   * @return {module:model/PermissionInheritanceRequest} The populated <code>PermissionInheritanceRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      PermissionInheritanceBase.constructFromObject(data, obj);
    }
    return obj;
  }

  exports.prototype = Object.create(PermissionInheritanceBase.prototype);
  exports.prototype.constructor = exports;




  return exports;
}));


