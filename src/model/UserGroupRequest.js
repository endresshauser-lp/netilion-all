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
    define(['ApiClient', 'model/UserGroupBase'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UserGroupBase'));
  } else {
    // Browser globals (root is window)
    if (!root.NetilionApiDocumentation) {
      root.NetilionApiDocumentation = {};
    }
    root.NetilionApiDocumentation.UserGroupRequest = factory(root.NetilionApiDocumentation.ApiClient, root.NetilionApiDocumentation.UserGroupBase);
  }
}(this, function(ApiClient, UserGroupBase) {
  'use strict';




  /**
   * The UserGroupRequest model module.
   * @module model/UserGroupRequest
   * @version 01.00.00
   */

  /**
   * Constructs a new <code>UserGroupRequest</code>.
   * @alias module:model/UserGroupRequest
   * @class
   * @extends module:model/UserGroupBase
   * @param name {String} Name must be unique. Max length is 60 characters. Whitespaces are trimmed.
   */
  var exports = function(name) {
    var _this = this;
    UserGroupBase.call(_this, name);
  };

  /**
   * Constructs a <code>UserGroupRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserGroupRequest} obj Optional instance to populate.
   * @return {module:model/UserGroupRequest} The populated <code>UserGroupRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      UserGroupBase.constructFromObject(data, obj);
    }
    return obj;
  }

  exports.prototype = Object.create(UserGroupBase.prototype);
  exports.prototype.constructor = exports;




  return exports;
}));


