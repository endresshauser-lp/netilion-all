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
    define(['ApiClient', 'model/DeliveryResponse', 'model/Pagination'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DeliveryResponse'), require('./Pagination'));
  } else {
    // Browser globals (root is window)
    if (!root.NetilionApiDocumentation) {
      root.NetilionApiDocumentation = {};
    }
    root.NetilionApiDocumentation.DeliveriesResponse = factory(root.NetilionApiDocumentation.ApiClient, root.NetilionApiDocumentation.DeliveryResponse, root.NetilionApiDocumentation.Pagination);
  }
}(this, function(ApiClient, DeliveryResponse, Pagination) {
  'use strict';




  /**
   * The DeliveriesResponse model module.
   * @module model/DeliveriesResponse
   * @version 01.00.00
   */

  /**
   * Constructs a new <code>DeliveriesResponse</code>.
   * @alias module:model/DeliveriesResponse
   * @class
   * @param deliveries {Array.<module:model/DeliveryResponse>} 
   * @param pagination {module:model/Pagination} 
   */
  var exports = function(deliveries, pagination) {
    var _this = this;

    _this['deliveries'] = deliveries;
    _this['pagination'] = pagination;
  };

  /**
   * Constructs a <code>DeliveriesResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeliveriesResponse} obj Optional instance to populate.
   * @return {module:model/DeliveriesResponse} The populated <code>DeliveriesResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('deliveries')) {
        obj['deliveries'] = ApiClient.convertToType(data['deliveries'], [DeliveryResponse]);
      }
      if (data.hasOwnProperty('pagination')) {
        obj['pagination'] = Pagination.constructFromObject(data['pagination']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/DeliveryResponse>} deliveries
   */
  exports.prototype['deliveries'] = undefined;
  /**
   * @member {module:model/Pagination} pagination
   */
  exports.prototype['pagination'] = undefined;



  return exports;
}));


