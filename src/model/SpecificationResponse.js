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
    define(['ApiClient', 'model/SpecificationBase'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SpecificationBase'));
  } else {
    // Browser globals (root is window)
    if (!root.NetilionApiDocumentation) {
      root.NetilionApiDocumentation = {};
    }
    root.NetilionApiDocumentation.SpecificationResponse = factory(root.NetilionApiDocumentation.ApiClient, root.NetilionApiDocumentation.SpecificationBase);
  }
}(this, function(ApiClient, SpecificationBase) {
  'use strict';




  /**
   * The SpecificationResponse model module.
   * @module model/SpecificationResponse
   * @version 01.00.00
   */

  /**
   * Constructs a new <code>SpecificationResponse</code>.
   * @alias module:model/SpecificationResponse
   * @class
   * @extends module:model/SpecificationBase
   */
  var exports = function() {
    var _this = this;
    SpecificationBase.call(_this);

  };

  /**
   * Constructs a <code>SpecificationResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SpecificationResponse} obj Optional instance to populate.
   * @return {module:model/SpecificationResponse} The populated <code>SpecificationResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      SpecificationBase.constructFromObject(data, obj);
      if (data.hasOwnProperty('updated_at')) {
        obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
      }
    }
    return obj;
  }

  exports.prototype = Object.create(SpecificationBase.prototype);
  exports.prototype.constructor = exports;

  /**
   * date of the last modification
   * @member {String} updated_at
   */
  exports.prototype['updated_at'] = undefined;



  return exports;
}));


