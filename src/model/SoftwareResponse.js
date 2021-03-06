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
    define(['ApiClient', 'model/Links18', 'model/NestedIDHref', 'model/SoftwareResponseSoftwareType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Links18'), require('./NestedIDHref'), require('./SoftwareResponseSoftwareType'));
  } else {
    // Browser globals (root is window)
    if (!root.NetilionApiDocumentation) {
      root.NetilionApiDocumentation = {};
    }
    root.NetilionApiDocumentation.SoftwareResponse = factory(root.NetilionApiDocumentation.ApiClient, root.NetilionApiDocumentation.Links18, root.NetilionApiDocumentation.NestedIDHref, root.NetilionApiDocumentation.SoftwareResponseSoftwareType);
  }
}(this, function(ApiClient, Links18, NestedIDHref, SoftwareResponseSoftwareType) {
  'use strict';




  /**
   * The SoftwareResponse model module.
   * @module model/SoftwareResponse
   * @version 01.00.00
   */

  /**
   * Constructs a new <code>SoftwareResponse</code>.
   * @alias module:model/SoftwareResponse
   * @class
   * @param id {Number} Id of object
   * @param versionNumber {String} 
   * @param tenant {module:model/NestedIDHref} 
   * @param softwareType {module:model/SoftwareResponseSoftwareType} 
   * @param links {module:model/Links18} 
   */
  var exports = function(id, versionNumber, tenant, softwareType, links) {
    var _this = this;

    _this['id'] = id;
    _this['version_number'] = versionNumber;


    _this['tenant'] = tenant;
    _this['software_type'] = softwareType;
    _this['links'] = links;
  };

  /**
   * Constructs a <code>SoftwareResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SoftwareResponse} obj Optional instance to populate.
   * @return {module:model/SoftwareResponse} The populated <code>SoftwareResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('version_number')) {
        obj['version_number'] = ApiClient.convertToType(data['version_number'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('tenant')) {
        obj['tenant'] = NestedIDHref.constructFromObject(data['tenant']);
      }
      if (data.hasOwnProperty('software_type')) {
        obj['software_type'] = SoftwareResponseSoftwareType.constructFromObject(data['software_type']);
      }
      if (data.hasOwnProperty('links')) {
        obj['links'] = Links18.constructFromObject(data['links']);
      }
    }
    return obj;
  }

  /**
   * Id of object
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} version_number
   */
  exports.prototype['version_number'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {module:model/NestedIDHref} tenant
   */
  exports.prototype['tenant'] = undefined;
  /**
   * @member {module:model/SoftwareResponseSoftwareType} software_type
   */
  exports.prototype['software_type'] = undefined;
  /**
   * @member {module:model/Links18} links
   */
  exports.prototype['links'] = undefined;



  return exports;
}));


