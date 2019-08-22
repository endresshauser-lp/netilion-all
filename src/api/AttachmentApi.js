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
    define(['ApiClient', 'model/AttachmentLinkRequest', 'model/AttachmentResponse', 'model/AttachmentsResponse', 'model/ErrorResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AttachmentLinkRequest'), require('../model/AttachmentResponse'), require('../model/AttachmentsResponse'), require('../model/ErrorResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.NetilionApiDocumentation) {
      root.NetilionApiDocumentation = {};
    }
    root.NetilionApiDocumentation.AttachmentApi = factory(root.NetilionApiDocumentation.ApiClient, root.NetilionApiDocumentation.AttachmentLinkRequest, root.NetilionApiDocumentation.AttachmentResponse, root.NetilionApiDocumentation.AttachmentsResponse, root.NetilionApiDocumentation.ErrorResponse);
  }
}(this, function(ApiClient, AttachmentLinkRequest, AttachmentResponse, AttachmentsResponse, ErrorResponse) {
  'use strict';

  /**
   * Attachment service.
   * @module api/AttachmentApi
   * @version 01.00.00
   */

  /**
   * Constructs a new AttachmentApi. 
   * @alias module:api/AttachmentApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a new link as attachment
     * Create an attachments that links to an external resource
     * @param {module:model/AttachmentLinkRequest} body Attachment object that needs to be created
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AttachmentResponse} and HTTP response
     */
    this.createLinkAttachmentWithHttpInfo = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createLinkAttachment");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['API-Key', 'Authentication'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AttachmentResponse;

      return this.apiClient.callApi(
        '/attachments/links', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a new link as attachment
     * Create an attachments that links to an external resource
     * @param {module:model/AttachmentLinkRequest} body Attachment object that needs to be created
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AttachmentResponse}
     */
    this.createLinkAttachment = function(body) {
      return this.createLinkAttachmentWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete an attachment and the file
     * Delete a specific attachment resource and file identified by the id in the URL.
     * @param {Number} id Id of the attachment to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteAttachmentWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteAttachment");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['API-Key', 'Authentication'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/attachments/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete an attachment and the file
     * Delete a specific attachment resource and file identified by the id in the URL.
     * @param {Number} id Id of the attachment to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteAttachment = function(id) {
      return this.deleteAttachmentWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Download the attachments file
     * Download the file of the attachment with the original filename. Content-Transfer-Encoding header is set to binary
     * @param {Number} id Id of the attachment to fetch
     * @param {Object} opts Optional parameters
     * @param {String} opts.disposition Disposition type the download should be returned with. Allowed values are \&quot;inline\&quot; and \&quot;attachment\&quot;. Default is \&quot;attachment\&quot;.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.downloadAttachmentWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling downloadAttachment");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'disposition': opts['disposition'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['API-Key', 'Authentication'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/attachments/{id}/download', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Download the attachments file
     * Download the file of the attachment with the original filename. Content-Transfer-Encoding header is set to binary
     * @param {Number} id Id of the attachment to fetch
     * @param {Object} opts Optional parameters
     * @param {String} opts.disposition Disposition type the download should be returned with. Allowed values are \&quot;inline\&quot; and \&quot;attachment\&quot;. Default is \&quot;attachment\&quot;.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.downloadAttachment = function(id, opts) {
      return this.downloadAttachmentWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a single attachment
     * specific attachment in your accessible scope, identified by the id in the URL.
     * @param {Number} id Id of the attachment to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AttachmentResponse} and HTTP response
     */
    this.getAttachmentByIdWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getAttachmentById");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['API-Key', 'Authentication'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AttachmentResponse;

      return this.apiClient.callApi(
        '/attachments/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a single attachment
     * specific attachment in your accessible scope, identified by the id in the URL.
     * @param {Number} id Id of the attachment to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AttachmentResponse}
     */
    this.getAttachmentById = function(id) {
      return this.getAttachmentByIdWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a range of attachments
     * Returns a list of all attachments that are available in your scope. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array.&#39;
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number to load
     * @param {Number} opts.perPage Number of items to load per page
     * @param {String} opts.contentAuthor Filter accepts &#x60;*&#x60; as wildcard
     * @param {String} opts.contentVersion Filter accepts &#x60;*&#x60; as wildcard
     * @param {String} opts.remarks Filter accepts &#x60;*&#x60; as wildcard
     * @param {Date} opts.contentDate Expected date format is YYYY-MM-DD or YYYY-MM-DDThh:mm:ss
     * @param {Date} opts.contentDateFrom Expected date format is YYYY-MM-DD or YYYY-MM-DDThh:mm:ss
     * @param {Date} opts.contentDateTo Expected date format is YYYY-MM-DD or YYYY-MM-DDThh:mm:ss
     * @param {String} opts.fileName Filter accepts &#x60;*&#x60; as wildcard
     * @param {String} opts.orderBy Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AttachmentsResponse} and HTTP response
     */
    this.getAttachmentsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
        'content_author': opts['contentAuthor'],
        'content_version': opts['contentVersion'],
        'remarks': opts['remarks'],
        'content_date': opts['contentDate'],
        'content_date_from': opts['contentDateFrom'],
        'content_date_to': opts['contentDateTo'],
        'file_name': opts['fileName'],
        'order_by': opts['orderBy'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['API-Key', 'Authentication'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AttachmentsResponse;

      return this.apiClient.callApi(
        '/attachments', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a range of attachments
     * Returns a list of all attachments that are available in your scope. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array.&#39;
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number to load
     * @param {Number} opts.perPage Number of items to load per page
     * @param {String} opts.contentAuthor Filter accepts &#x60;*&#x60; as wildcard
     * @param {String} opts.contentVersion Filter accepts &#x60;*&#x60; as wildcard
     * @param {String} opts.remarks Filter accepts &#x60;*&#x60; as wildcard
     * @param {Date} opts.contentDate Expected date format is YYYY-MM-DD or YYYY-MM-DDThh:mm:ss
     * @param {Date} opts.contentDateFrom Expected date format is YYYY-MM-DD or YYYY-MM-DDThh:mm:ss
     * @param {Date} opts.contentDateTo Expected date format is YYYY-MM-DD or YYYY-MM-DDThh:mm:ss
     * @param {String} opts.fileName Filter accepts &#x60;*&#x60; as wildcard
     * @param {String} opts.orderBy Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AttachmentsResponse}
     */
    this.getAttachments = function(opts) {
      return this.getAttachmentsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update an attachment and especially its file
     * The attachment object and also the file can be changed with a patch call. Checks the file-storage quota
     * @param {Number} id Id of the attachment to update
     * @param {Object} opts Optional parameters
     * @param {File} opts.file the filedata to upload
     * @param {Number} opts.documentId the document this attachment belongs to
     * @param {String} opts.contentAuthor the file authors name
     * @param {String} opts.contentDate last edit date of the file. Datetime must be in format YYYY-MM-DD or YYYY-MM-DDThh:mm:ss
     * @param {String} opts.remarks remarks on the attachment
     * @param {String} opts.languages the files content languages. Send as comma separated list with alpha2 language codes (eg. de,en,fr). Supported languages are defined in ISO639-1
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.updateAttachmentWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateAttachment");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'file': opts['file'],
        'document_id': opts['documentId'],
        'content_author': opts['contentAuthor'],
        'content_date': opts['contentDate'],
        'remarks': opts['remarks'],
        'languages': opts['languages']
      };

      var authNames = ['API-Key', 'Authentication'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/attachments/{id}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update an attachment and especially its file
     * The attachment object and also the file can be changed with a patch call. Checks the file-storage quota
     * @param {Number} id Id of the attachment to update
     * @param {Object} opts Optional parameters
     * @param {File} opts.file the filedata to upload
     * @param {Number} opts.documentId the document this attachment belongs to
     * @param {String} opts.contentAuthor the file authors name
     * @param {String} opts.contentDate last edit date of the file. Datetime must be in format YYYY-MM-DD or YYYY-MM-DDThh:mm:ss
     * @param {String} opts.remarks remarks on the attachment
     * @param {String} opts.languages the files content languages. Send as comma separated list with alpha2 language codes (eg. de,en,fr). Supported languages are defined in ISO639-1
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.updateAttachment = function(id, opts) {
      return this.updateAttachmentWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update an attachment with a link
     * update an attachment that has a link
     * @param {Number} id Id of the attachment to update
     * @param {module:model/AttachmentLinkRequest} body Attachment object that needs to be created
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AttachmentResponse} and HTTP response
     */
    this.updateLinkAttachmentWithHttpInfo = function(id, body) {
      var postBody = body;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateLinkAttachment");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateLinkAttachment");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['API-Key', 'Authentication'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AttachmentResponse;

      return this.apiClient.callApi(
        '/attachments/links/{id}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update an attachment with a link
     * update an attachment that has a link
     * @param {Number} id Id of the attachment to update
     * @param {module:model/AttachmentLinkRequest} body Attachment object that needs to be created
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AttachmentResponse}
     */
    this.updateLinkAttachment = function(id, body) {
      return this.updateLinkAttachmentWithHttpInfo(id, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create and upload a new attachment
     * the creation of an attachment works through a multipart/form-data upload of the file, its filename, content-author, content-date and languages of the file. Checks for the file-storage quota.  Forbidden content-types are  - application/xhtml+xml - text/html - application/javascript - text/javascript - application/x-shockwave-flash - application/vnd.adobe.flash.movie - video/x-flv - text/php - application/php - application/x-php - application/x-httpd-php
     * @param {File} file the filedata to upload
     * @param {Number} documentId the document this attachment belongs to
     * @param {Object} opts Optional parameters
     * @param {String} opts.contentAuthor the file authors name
     * @param {String} opts.contentVersion The version can be set as float
     * @param {String} opts.contentDate last edit date of the file. Datetime must be in format YYYY-MM-DD or YYYY-MM-DDThh:mm:ss
     * @param {String} opts.remarks remarks on the attachment
     * @param {String} opts.languages the files content languages. Send as comma separated list with alpha2 language codes (eg. de,en,fr). Supported languages are defined in ISO639-1
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AttachmentResponse} and HTTP response
     */
    this.uploadAttachmentWithHttpInfo = function(file, documentId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'file' is set
      if (file === undefined || file === null) {
        throw new Error("Missing the required parameter 'file' when calling uploadAttachment");
      }

      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling uploadAttachment");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'file': file,
        'document_id': documentId,
        'content_author': opts['contentAuthor'],
        'content_version': opts['contentVersion'],
        'content_date': opts['contentDate'],
        'remarks': opts['remarks'],
        'languages': opts['languages']
      };

      var authNames = ['API-Key', 'Authentication'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = AttachmentResponse;

      return this.apiClient.callApi(
        '/attachments', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create and upload a new attachment
     * the creation of an attachment works through a multipart/form-data upload of the file, its filename, content-author, content-date and languages of the file. Checks for the file-storage quota.  Forbidden content-types are  - application/xhtml+xml - text/html - application/javascript - text/javascript - application/x-shockwave-flash - application/vnd.adobe.flash.movie - video/x-flv - text/php - application/php - application/x-php - application/x-httpd-php
     * @param {File} file the filedata to upload
     * @param {Number} documentId the document this attachment belongs to
     * @param {Object} opts Optional parameters
     * @param {String} opts.contentAuthor the file authors name
     * @param {String} opts.contentVersion The version can be set as float
     * @param {String} opts.contentDate last edit date of the file. Datetime must be in format YYYY-MM-DD or YYYY-MM-DDThh:mm:ss
     * @param {String} opts.remarks remarks on the attachment
     * @param {String} opts.languages the files content languages. Send as comma separated list with alpha2 language codes (eg. de,en,fr). Supported languages are defined in ISO639-1
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AttachmentResponse}
     */
    this.uploadAttachment = function(file, documentId, opts) {
      return this.uploadAttachmentWithHttpInfo(file, documentId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));