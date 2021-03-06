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
    define(['ApiClient', 'model/Assignable', 'model/PermissionBase', 'model/Permitable'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Assignable'), require('./PermissionBase'), require('./Permitable'));
  } else {
    // Browser globals (root is window)
    if (!root.NetilionApiDocumentation) {
      root.NetilionApiDocumentation = {};
    }
    root.NetilionApiDocumentation.PermissionRequest = factory(root.NetilionApiDocumentation.ApiClient, root.NetilionApiDocumentation.Assignable, root.NetilionApiDocumentation.PermissionBase, root.NetilionApiDocumentation.Permitable);
  }
}(this, function(ApiClient, Assignable, PermissionBase, Permitable) {
  'use strict';




  /**
   * The PermissionRequest model module.
   * @module model/PermissionRequest
   * @version 01.00.00
   */

  /**
   * Constructs a new <code>PermissionRequest</code>.
   * @alias module:model/PermissionRequest
   * @class
   * @extends module:model/PermissionBase
   */
  var exports = function() {
    var _this = this;
    PermissionBase.call(_this);
  };

  /**
   * Constructs a <code>PermissionRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PermissionRequest} obj Optional instance to populate.
   * @return {module:model/PermissionRequest} The populated <code>PermissionRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      PermissionBase.constructFromObject(data, obj);
    }
    return obj;
  }

  exports.prototype = Object.create(PermissionBase.prototype);
  exports.prototype.constructor = exports;




  return exports;
}));


