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
    define(['ApiClient', 'model/BillingContactRequest', 'model/ClientApplicationBase', 'model/NestedID'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BillingContactRequest'), require('./ClientApplicationBase'), require('./NestedID'));
  } else {
    // Browser globals (root is window)
    if (!root.NetilionApiDocumentation) {
      root.NetilionApiDocumentation = {};
    }
    root.NetilionApiDocumentation.ClientApplicationRequest = factory(root.NetilionApiDocumentation.ApiClient, root.NetilionApiDocumentation.BillingContactRequest, root.NetilionApiDocumentation.ClientApplicationBase, root.NetilionApiDocumentation.NestedID);
  }
}(this, function(ApiClient, BillingContactRequest, ClientApplicationBase, NestedID) {
  'use strict';




  /**
   * The ClientApplicationRequest model module.
   * @module model/ClientApplicationRequest
   * @version 01.00.00
   */

  /**
   * Constructs a new <code>ClientApplicationRequest</code>.
   * @alias module:model/ClientApplicationRequest
   * @class
   * @extends module:model/ClientApplicationBase
   * @param name {String} Name of the client application
   */
  var exports = function(name) {
    var _this = this;
    ClientApplicationBase.call(_this, name);



  };

  /**
   * Constructs a <code>ClientApplicationRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClientApplicationRequest} obj Optional instance to populate.
   * @return {module:model/ClientApplicationRequest} The populated <code>ClientApplicationRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      ClientApplicationBase.constructFromObject(data, obj);
      if (data.hasOwnProperty('contact_person')) {
        obj['contact_person'] = NestedID.constructFromObject(data['contact_person']);
      }
      if (data.hasOwnProperty('technical_user')) {
        obj['technical_user'] = NestedID.constructFromObject(data['technical_user']);
      }
      if (data.hasOwnProperty('billing_contact')) {
        obj['billing_contact'] = BillingContactRequest.constructFromObject(data['billing_contact']);
      }
    }
    return obj;
  }

  exports.prototype = Object.create(ClientApplicationBase.prototype);
  exports.prototype.constructor = exports;

  /**
   * @member {module:model/NestedID} contact_person
   */
  exports.prototype['contact_person'] = undefined;
  /**
   * @member {module:model/NestedID} technical_user
   */
  exports.prototype['technical_user'] = undefined;
  /**
   * @member {module:model/BillingContactRequest} billing_contact
   */
  exports.prototype['billing_contact'] = undefined;



  return exports;
}));


