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
    root.NetilionApiDocumentation.AttachmentLinkRequest = factory(root.NetilionApiDocumentation.ApiClient, root.NetilionApiDocumentation.NestedID);
  }
}(this, function(ApiClient, NestedID) {
  'use strict';




  /**
   * The AttachmentLinkRequest model module.
   * @module model/AttachmentLinkRequest
   * @version 01.00.00
   */

  /**
   * Constructs a new <code>AttachmentLinkRequest</code>.
   * @alias module:model/AttachmentLinkRequest
   * @class
   * @param href {String} the link, must be http or https link
   * @param document {module:model/NestedID} 
   */
  var exports = function(href, document) {
    var _this = this;

    _this['href'] = href;




    _this['document'] = document;

  };

  /**
   * Constructs a <code>AttachmentLinkRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AttachmentLinkRequest} obj Optional instance to populate.
   * @return {module:model/AttachmentLinkRequest} The populated <code>AttachmentLinkRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('href')) {
        obj['href'] = ApiClient.convertToType(data['href'], 'String');
      }
      if (data.hasOwnProperty('content_author')) {
        obj['content_author'] = ApiClient.convertToType(data['content_author'], 'String');
      }
      if (data.hasOwnProperty('content_version')) {
        obj['content_version'] = ApiClient.convertToType(data['content_version'], 'String');
      }
      if (data.hasOwnProperty('content_date')) {
        obj['content_date'] = ApiClient.convertToType(data['content_date'], 'String');
      }
      if (data.hasOwnProperty('remarks')) {
        obj['remarks'] = ApiClient.convertToType(data['remarks'], 'String');
      }
      if (data.hasOwnProperty('document')) {
        obj['document'] = NestedID.constructFromObject(data['document']);
      }
      if (data.hasOwnProperty('languages')) {
        obj['languages'] = ApiClient.convertToType(data['languages'], 'String');
      }
    }
    return obj;
  }

  /**
   * the link, must be http or https link
   * @member {String} href
   */
  exports.prototype['href'] = undefined;
  /**
   * the file authors name
   * @member {String} content_author
   */
  exports.prototype['content_author'] = undefined;
  /**
   * The version of the attachment
   * @member {String} content_version
   */
  exports.prototype['content_version'] = undefined;
  /**
   * Last edit date of the file
   * @member {String} content_date
   */
  exports.prototype['content_date'] = undefined;
  /**
   * remarks of the attachment
   * @member {String} remarks
   */
  exports.prototype['remarks'] = undefined;
  /**
   * @member {module:model/NestedID} document
   */
  exports.prototype['document'] = undefined;
  /**
   * the languages of the files content
   * @member {String} languages
   */
  exports.prototype['languages'] = undefined;



  return exports;
}));


