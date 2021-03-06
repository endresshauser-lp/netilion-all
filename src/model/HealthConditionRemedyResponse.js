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
    define(['ApiClient', 'model/HealthConditionRemedyBase'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./HealthConditionRemedyBase'));
  } else {
    // Browser globals (root is window)
    if (!root.NetilionApiDocumentation) {
      root.NetilionApiDocumentation = {};
    }
    root.NetilionApiDocumentation.HealthConditionRemedyResponse = factory(root.NetilionApiDocumentation.ApiClient, root.NetilionApiDocumentation.HealthConditionRemedyBase);
  }
}(this, function(ApiClient, HealthConditionRemedyBase) {
  'use strict';




  /**
   * The HealthConditionRemedyResponse model module.
   * @module model/HealthConditionRemedyResponse
   * @version 01.00.00
   */

  /**
   * Constructs a new <code>HealthConditionRemedyResponse</code>.
   * @alias module:model/HealthConditionRemedyResponse
   * @class
   * @extends module:model/HealthConditionRemedyBase
   * @param code {String} code of the remedy
   * @param description {String} description of the remedy
   */
  var exports = function(code, description) {
    var _this = this;
    HealthConditionRemedyBase.call(_this, code, description);

  };

  /**
   * Constructs a <code>HealthConditionRemedyResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HealthConditionRemedyResponse} obj Optional instance to populate.
   * @return {module:model/HealthConditionRemedyResponse} The populated <code>HealthConditionRemedyResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      HealthConditionRemedyBase.constructFromObject(data, obj);
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
    }
    return obj;
  }

  exports.prototype = Object.create(HealthConditionRemedyBase.prototype);
  exports.prototype.constructor = exports;

  /**
   * Id of object
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;



  return exports;
}));


