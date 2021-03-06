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
    define(['ApiClient', 'model/AssetHistoryBase'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AssetHistoryBase'));
  } else {
    // Browser globals (root is window)
    if (!root.NetilionApiDocumentation) {
      root.NetilionApiDocumentation = {};
    }
    root.NetilionApiDocumentation.AssetHistory = factory(root.NetilionApiDocumentation.ApiClient, root.NetilionApiDocumentation.AssetHistoryBase);
  }
}(this, function(ApiClient, AssetHistoryBase) {
  'use strict';




  /**
   * The AssetHistory model module.
   * @module model/AssetHistory
   * @version 01.00.00
   */

  /**
   * Constructs a new <code>AssetHistory</code>.
   * @alias module:model/AssetHistory
   * @class
   * @param asset {module:model/AssetHistoryBase} 
   * @param datetime {Date} Date and time when the asset was changed
   */
  var exports = function(asset, datetime) {
    var _this = this;

    _this['asset'] = asset;
    _this['datetime'] = datetime;
  };

  /**
   * Constructs a <code>AssetHistory</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AssetHistory} obj Optional instance to populate.
   * @return {module:model/AssetHistory} The populated <code>AssetHistory</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('asset')) {
        obj['asset'] = AssetHistoryBase.constructFromObject(data['asset']);
      }
      if (data.hasOwnProperty('datetime')) {
        obj['datetime'] = ApiClient.convertToType(data['datetime'], 'Date');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/AssetHistoryBase} asset
   */
  exports.prototype['asset'] = undefined;
  /**
   * Date and time when the asset was changed
   * @member {Date} datetime
   */
  exports.prototype['datetime'] = undefined;



  return exports;
}));


