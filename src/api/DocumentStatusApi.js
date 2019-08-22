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
    define(['ApiClient', 'model/DocumentStatusRequest', 'model/DocumentStatusResponse', 'model/DocumentStatuses', 'model/ErrorResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DocumentStatusRequest'), require('../model/DocumentStatusResponse'), require('../model/DocumentStatuses'), require('../model/ErrorResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.NetilionApiDocumentation) {
      root.NetilionApiDocumentation = {};
    }
    root.NetilionApiDocumentation.DocumentStatusApi = factory(root.NetilionApiDocumentation.ApiClient, root.NetilionApiDocumentation.DocumentStatusRequest, root.NetilionApiDocumentation.DocumentStatusResponse, root.NetilionApiDocumentation.DocumentStatuses, root.NetilionApiDocumentation.ErrorResponse);
  }
}(this, function(ApiClient, DocumentStatusRequest, DocumentStatusResponse, DocumentStatuses, ErrorResponse) {
  'use strict';

  /**
   * DocumentStatus service.
   * @module api/DocumentStatusApi
   * @version 01.00.00
   */

  /**
   * Constructs a new DocumentStatusApi. 
   * @alias module:api/DocumentStatusApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a new document status
     * Code must be unique. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. POST sets values in default language: en.
     * @param {module:model/DocumentStatusRequest} body DocumentStatus object to create.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DocumentStatusResponse} and HTTP response
     */
    this.createDocumentStatusWithHttpInfo = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createDocumentStatus");
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
      var returnType = DocumentStatusResponse;

      return this.apiClient.callApi(
        '/document/statuses', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a new document status
     * Code must be unique. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. POST sets values in default language: en.
     * @param {module:model/DocumentStatusRequest} body DocumentStatus object to create.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DocumentStatusResponse}
     */
    this.createDocumentStatus = function(body) {
      return this.createDocumentStatusWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a document status
     * Delete a specific resource identified by the id in the URL.
     * @param {Number} id Id of the document status to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteDocumentStatusWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteDocumentStatus");
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
        '/document/statuses/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a document status
     * Delete a specific resource identified by the id in the URL.
     * @param {Number} id Id of the document status to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteDocumentStatus = function(id) {
      return this.deleteDocumentStatusWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the status of a specific document
     * Returns the status of the document. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translations set Accept-Language.
     * @param {Number} documentId Id of the specified document
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage The client&#39;s accepted languages. One or several (e.g. fr,de,en)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DocumentStatusResponse} and HTTP response
     */
    this.getDocumentIdStatusWithHttpInfo = function(documentId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling getDocumentIdStatus");
      }


      var pathParams = {
        'document_id': documentId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Accept-Language': opts['acceptLanguage']
      };
      var formParams = {
      };

      var authNames = ['API-Key', 'Authentication'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = DocumentStatusResponse;

      return this.apiClient.callApi(
        '/documents/{document_id}/status', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get the status of a specific document
     * Returns the status of the document. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translations set Accept-Language.
     * @param {Number} documentId Id of the specified document
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage The client&#39;s accepted languages. One or several (e.g. fr,de,en)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DocumentStatusResponse}
     */
    this.getDocumentIdStatus = function(documentId, opts) {
      return this.getDocumentIdStatusWithHttpInfo(documentId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a single document status
     * Get a specific document status identified by the id in the URL. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translations set Accept-Language.
     * @param {Number} id Id of document status to fetch
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage The client&#39;s accepted languages. One or several (e.g. fr,de,en)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DocumentStatusResponse} and HTTP response
     */
    this.getDocumentStatusByIdWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getDocumentStatusById");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Accept-Language': opts['acceptLanguage']
      };
      var formParams = {
      };

      var authNames = ['API-Key', 'Authentication'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = DocumentStatusResponse;

      return this.apiClient.callApi(
        '/document/statuses/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a single document status
     * Get a specific document status identified by the id in the URL. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translations set Accept-Language.
     * @param {Number} id Id of document status to fetch
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage The client&#39;s accepted languages. One or several (e.g. fr,de,en)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DocumentStatusResponse}
     */
    this.getDocumentStatusById = function(id, opts) {
      return this.getDocumentStatusByIdWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a range of document statuses
     * Returns a list of all document statuses that are available in your scope. You can apply the query parameters listed below to get a filtered list. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translations set Accept-Language.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number to load
     * @param {Number} opts.perPage Number of items to load per page
     * @param {String} opts.code Filter accepts &#x60;*&#x60; as wildcard
     * @param {String} opts.name Filter accepts &#x60;*&#x60; as wildcard
     * @param {String} opts.tenantId One or multiple ids (comma list). Expected id format is integer
     * @param {String} opts.orderBy Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60;
     * @param {String} opts.acceptLanguage The client&#39;s accepted languages. One or several (e.g. fr,de,en)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DocumentStatuses} and HTTP response
     */
    this.getDocumentStatusesWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
        'code': opts['code'],
        'name': opts['name'],
        'tenant_id': opts['tenantId'],
        'order_by': opts['orderBy'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Accept-Language': opts['acceptLanguage']
      };
      var formParams = {
      };

      var authNames = ['API-Key', 'Authentication'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = DocumentStatuses;

      return this.apiClient.callApi(
        '/document/statuses', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a range of document statuses
     * Returns a list of all document statuses that are available in your scope. You can apply the query parameters listed below to get a filtered list. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translations set Accept-Language.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number to load
     * @param {Number} opts.perPage Number of items to load per page
     * @param {String} opts.code Filter accepts &#x60;*&#x60; as wildcard
     * @param {String} opts.name Filter accepts &#x60;*&#x60; as wildcard
     * @param {String} opts.tenantId One or multiple ids (comma list). Expected id format is integer
     * @param {String} opts.orderBy Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60;
     * @param {String} opts.acceptLanguage The client&#39;s accepted languages. One or several (e.g. fr,de,en)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DocumentStatuses}
     */
    this.getDocumentStatuses = function(opts) {
      return this.getDocumentStatusesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get all possible statuses for the specified document
     * Returns a list of all possible document statuses for the specified document. You can apply the query parameters listed below to get a filtered list. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translations set Accept-Language.
     * @param {Number} documentId Id of the specified document
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number to load
     * @param {Number} opts.perPage Number of items to load per page
     * @param {String} opts.include Comma separated list of objects to include in response
     * @param {String} opts.code Filter accepts &#x60;*&#x60; as wildcard
     * @param {String} opts.name Filter accepts &#x60;*&#x60; as wildcard
     * @param {String} opts.tenantId One or multiple ids (comma list). Expected id format is integer
     * @param {String} opts.orderBy Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60;
     * @param {String} opts.acceptLanguage The client&#39;s accepted languages. One or several (e.g. fr,de,en)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DocumentStatuses} and HTTP response
     */
    this.getDocumentStatusesOptionsWithHttpInfo = function(documentId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling getDocumentStatusesOptions");
      }


      var pathParams = {
        'document_id': documentId
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
        'include': opts['include'],
        'code': opts['code'],
        'name': opts['name'],
        'tenant_id': opts['tenantId'],
        'order_by': opts['orderBy'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Accept-Language': opts['acceptLanguage']
      };
      var formParams = {
      };

      var authNames = ['API-Key', 'Authentication'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = DocumentStatuses;

      return this.apiClient.callApi(
        '/documents/{document_id}/status-options', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get all possible statuses for the specified document
     * Returns a list of all possible document statuses for the specified document. You can apply the query parameters listed below to get a filtered list. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translations set Accept-Language.
     * @param {Number} documentId Id of the specified document
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number to load
     * @param {Number} opts.perPage Number of items to load per page
     * @param {String} opts.include Comma separated list of objects to include in response
     * @param {String} opts.code Filter accepts &#x60;*&#x60; as wildcard
     * @param {String} opts.name Filter accepts &#x60;*&#x60; as wildcard
     * @param {String} opts.tenantId One or multiple ids (comma list). Expected id format is integer
     * @param {String} opts.orderBy Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60;
     * @param {String} opts.acceptLanguage The client&#39;s accepted languages. One or several (e.g. fr,de,en)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DocumentStatuses}
     */
    this.getDocumentStatusesOptions = function(documentId, opts) {
      return this.getDocumentStatusesOptionsWithHttpInfo(documentId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a document status
     * Update accessible parameters of the requested resource. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To add a translation set Content-Language.
     * @param {Number} id Id of the document status to update
     * @param {module:model/DocumentStatusRequest} body Parameters that shall be updated.
     * @param {Object} opts Optional parameters
     * @param {String} opts.contentLanguage language of the content
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.updateDocumentStatusWithHttpInfo = function(id, body, opts) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateDocumentStatus");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateDocumentStatus");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Content-Language': opts['contentLanguage']
      };
      var formParams = {
      };

      var authNames = ['API-Key', 'Authentication'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/document/statuses/{id}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a document status
     * Update accessible parameters of the requested resource. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To add a translation set Content-Language.
     * @param {Number} id Id of the document status to update
     * @param {module:model/DocumentStatusRequest} body Parameters that shall be updated.
     * @param {Object} opts Optional parameters
     * @param {String} opts.contentLanguage language of the content
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.updateDocumentStatus = function(id, body, opts) {
      return this.updateDocumentStatusWithHttpInfo(id, body, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
