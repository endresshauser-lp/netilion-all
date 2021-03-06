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
    root.NetilionApiDocumentation.SignInResponse = factory(root.NetilionApiDocumentation.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SignInResponse model module.
   * @module model/SignInResponse
   * @version 01.00.00
   */

  /**
   * Constructs a new <code>SignInResponse</code>.
   * @alias module:model/SignInResponse
   * @class
   * @param time {String} time at which the user signed in
   * @param application {String} name of the application the user signed in
   * @param ip {String} remote ip used by the user
   */
  var exports = function(time, application, ip) {
    var _this = this;

    _this['time'] = time;
    _this['application'] = application;
    _this['ip'] = ip;





  };

  /**
   * Constructs a <code>SignInResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SignInResponse} obj Optional instance to populate.
   * @return {module:model/SignInResponse} The populated <code>SignInResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('time')) {
        obj['time'] = ApiClient.convertToType(data['time'], 'String');
      }
      if (data.hasOwnProperty('application')) {
        obj['application'] = ApiClient.convertToType(data['application'], 'String');
      }
      if (data.hasOwnProperty('ip')) {
        obj['ip'] = ApiClient.convertToType(data['ip'], 'String');
      }
      if (data.hasOwnProperty('browser_name')) {
        obj['browser_name'] = ApiClient.convertToType(data['browser_name'], 'String');
      }
      if (data.hasOwnProperty('browser_version')) {
        obj['browser_version'] = ApiClient.convertToType(data['browser_version'], 'String');
      }
      if (data.hasOwnProperty('device_type')) {
        obj['device_type'] = ApiClient.convertToType(data['device_type'], 'String');
      }
      if (data.hasOwnProperty('platform_name')) {
        obj['platform_name'] = ApiClient.convertToType(data['platform_name'], 'String');
      }
      if (data.hasOwnProperty('platform_version')) {
        obj['platform_version'] = ApiClient.convertToType(data['platform_version'], 'String');
      }
    }
    return obj;
  }

  /**
   * time at which the user signed in
   * @member {String} time
   */
  exports.prototype['time'] = undefined;
  /**
   * name of the application the user signed in
   * @member {String} application
   */
  exports.prototype['application'] = undefined;
  /**
   * remote ip used by the user
   * @member {String} ip
   */
  exports.prototype['ip'] = undefined;
  /**
   * name of the used browser
   * @member {String} browser_name
   */
  exports.prototype['browser_name'] = undefined;
  /**
   * version of the used browser
   * @member {String} browser_version
   */
  exports.prototype['browser_version'] = undefined;
  /**
   * type of the used device (desktop, tablet or mobile)
   * @member {String} device_type
   */
  exports.prototype['device_type'] = undefined;
  /**
   * name of the used platform
   * @member {String} platform_name
   */
  exports.prototype['platform_name'] = undefined;
  /**
   * version of the used platform
   * @member {String} platform_version
   */
  exports.prototype['platform_version'] = undefined;



  return exports;
}));


