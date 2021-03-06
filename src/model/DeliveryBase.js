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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.NetilionApiDocumentation) {
      root.NetilionApiDocumentation = {};
    }
    root.NetilionApiDocumentation.DeliveryBase = factory(root.NetilionApiDocumentation.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DeliveryBase model module.
   * @module model/DeliveryBase
   * @version 01.00.00
   */

  /**
   * Constructs a new <code>DeliveryBase</code>.
   * Deliveries during life cycle of assets
   * @alias module:model/DeliveryBase
   * @class
   * @param _number {String} Number of the delivery
   * @param name {String} Name of the delivery
   */
  var exports = function(_number, name) {
    var _this = this;

    _this['number'] = _number;
    _this['name'] = name;


  };

  /**
   * Constructs a <code>DeliveryBase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeliveryBase} obj Optional instance to populate.
   * @return {module:model/DeliveryBase} The populated <code>DeliveryBase</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('number')) {
        obj['number'] = ApiClient.convertToType(data['number'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('date_of_shipment')) {
        obj['date_of_shipment'] = ApiClient.convertToType(data['date_of_shipment'], 'String');
      }
    }
    return obj;
  }

  /**
   * Number of the delivery
   * @member {String} number
   */
  exports.prototype['number'] = undefined;
  /**
   * Name of the delivery
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * description text of the delivery
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * date of the delivery: format example: 2016-01-01T18:30:00
   * @member {String} date_of_shipment
   */
  exports.prototype['date_of_shipment'] = undefined;



  return exports;
}));


