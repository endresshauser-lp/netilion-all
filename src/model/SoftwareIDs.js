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
    root.NetilionApiDocumentation.SoftwareIDs = factory(root.NetilionApiDocumentation.ApiClient, root.NetilionApiDocumentation.NestedID);
  }
}(this, function(ApiClient, NestedID) {
  'use strict';




  /**
   * The SoftwareIDs model module.
   * @module model/SoftwareIDs
   * @version 01.00.00
   */

  /**
   * Constructs a new <code>SoftwareIDs</code>.
   * @alias module:model/SoftwareIDs
   * @class
   * @param softwares {Array.<module:model/NestedID>} 
   */
  var exports = function(softwares) {
    var _this = this;

    _this['softwares'] = softwares;
  };

  /**
   * Constructs a <code>SoftwareIDs</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SoftwareIDs} obj Optional instance to populate.
   * @return {module:model/SoftwareIDs} The populated <code>SoftwareIDs</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('softwares')) {
        obj['softwares'] = ApiClient.convertToType(data['softwares'], [NestedID]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/NestedID>} softwares
   */
  exports.prototype['softwares'] = undefined;



  return exports;
}));


