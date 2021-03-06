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
    define(['ApiClient', 'model/NestedID', 'model/NotificationBase'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NestedID'), require('./NotificationBase'));
  } else {
    // Browser globals (root is window)
    if (!root.NetilionApiDocumentation) {
      root.NetilionApiDocumentation = {};
    }
    root.NetilionApiDocumentation.NotificationRequest = factory(root.NetilionApiDocumentation.ApiClient, root.NetilionApiDocumentation.NestedID, root.NetilionApiDocumentation.NotificationBase);
  }
}(this, function(ApiClient, NestedID, NotificationBase) {
  'use strict';




  /**
   * The NotificationRequest model module.
   * @module model/NotificationRequest
   * @version 01.00.00
   */

  /**
   * Constructs a new <code>NotificationRequest</code>.
   * @alias module:model/NotificationRequest
   * @class
   * @extends module:model/NotificationBase
   * @param name {String} The name of the notification
   * @param content {String} Supports translations.
   * @param startDatetime {String} start date/time of the notification: format example: 2016-01-01T18:30:00
   */
  var exports = function(name, content, startDatetime) {
    var _this = this;
    NotificationBase.call(_this, name, content, startDatetime);

  };

  /**
   * Constructs a <code>NotificationRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NotificationRequest} obj Optional instance to populate.
   * @return {module:model/NotificationRequest} The populated <code>NotificationRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      NotificationBase.constructFromObject(data, obj);
      if (data.hasOwnProperty('client_applications')) {
        obj['client_applications'] = ApiClient.convertToType(data['client_applications'], [NestedID]);
      }
    }
    return obj;
  }

  exports.prototype = Object.create(NotificationBase.prototype);
  exports.prototype.constructor = exports;

  /**
   * @member {Array.<module:model/NestedID>} client_applications
   */
  exports.prototype['client_applications'] = undefined;



  return exports;
}));


