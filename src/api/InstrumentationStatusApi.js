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
    define(['ApiClient', 'model/ErrorResponse', 'model/InstrumentationStatusRequest', 'model/InstrumentationStatusResponse', 'model/InstrumentationStatuses', 'model/InstrumentationStatuses1'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ErrorResponse'), require('../model/InstrumentationStatusRequest'), require('../model/InstrumentationStatusResponse'), require('../model/InstrumentationStatuses'), require('../model/InstrumentationStatuses1'));
  } else {
    // Browser globals (root is window)
    if (!root.NetilionApiDocumentation) {
      root.NetilionApiDocumentation = {};
    }
    root.NetilionApiDocumentation.InstrumentationStatusApi = factory(root.NetilionApiDocumentation.ApiClient, root.NetilionApiDocumentation.ErrorResponse, root.NetilionApiDocumentation.InstrumentationStatusRequest, root.NetilionApiDocumentation.InstrumentationStatusResponse, root.NetilionApiDocumentation.InstrumentationStatuses, root.NetilionApiDocumentation.InstrumentationStatuses1);
  }
}(this, function(ApiClient, ErrorResponse, InstrumentationStatusRequest, InstrumentationStatusResponse, InstrumentationStatuses, InstrumentationStatuses1) {
  'use strict';

  /**
   * InstrumentationStatus service.
   * @module api/InstrumentationStatusApi
   * @version 01.00.00
   */

  /**
   * Constructs a new InstrumentationStatusApi. 
   * @alias module:api/InstrumentationStatusApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a new instrumentation status
     * Code must be unique. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. POST sets values in default language: en.
     * @param {module:model/InstrumentationStatusRequest} body InstrumentationStatus object to create.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InstrumentationStatusResponse} and HTTP response
     */
    this.createInstrumentationStatusWithHttpInfo = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createInstrumentationStatus");
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
      var returnType = InstrumentationStatusResponse;

      return this.apiClient.callApi(
        '/instrumentation/statuses', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a new instrumentation status
     * Code must be unique. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. POST sets values in default language: en.
     * @param {module:model/InstrumentationStatusRequest} body InstrumentationStatus object to create.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InstrumentationStatusResponse}
     */
    this.createInstrumentationStatus = function(body) {
      return this.createInstrumentationStatusWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete an instrumentation status
     * Delete a specific resource identified by the id in the URL.
     * @param {Number} id Id of the instrumentation status to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteInstrumentationStatusWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteInstrumentationStatus");
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
        '/instrumentation/statuses/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete an instrumentation status
     * Delete a specific resource identified by the id in the URL.
     * @param {Number} id Id of the instrumentation status to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteInstrumentationStatus = function(id) {
      return this.deleteInstrumentationStatusWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the status of the specific instrumentation
     * Returns the status of the instrumentation. Needed if only permission on instrumentation but not on tenant. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translation set Accept-Language.
     * @param {Number} instrumentationId Id of the instrumentation
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage The client&#39;s accepted languages. One or several (e.g. fr,de,en)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InstrumentationStatusResponse} and HTTP response
     */
    this.getInstrumentationIdStatusWithHttpInfo = function(instrumentationId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'instrumentationId' is set
      if (instrumentationId === undefined || instrumentationId === null) {
        throw new Error("Missing the required parameter 'instrumentationId' when calling getInstrumentationIdStatus");
      }


      var pathParams = {
        'instrumentation_id': instrumentationId
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
      var returnType = InstrumentationStatusResponse;

      return this.apiClient.callApi(
        '/instrumentations/{instrumentation_id}/status', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get the status of the specific instrumentation
     * Returns the status of the instrumentation. Needed if only permission on instrumentation but not on tenant. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translation set Accept-Language.
     * @param {Number} instrumentationId Id of the instrumentation
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage The client&#39;s accepted languages. One or several (e.g. fr,de,en)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InstrumentationStatusResponse}
     */
    this.getInstrumentationIdStatus = function(instrumentationId, opts) {
      return this.getInstrumentationIdStatusWithHttpInfo(instrumentationId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a single instrumentation status
     * Get a specific instrumentation status identified by the id in the URL. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translation set Accept-Language.
     * @param {Number} id Id of instrumentation status to fetch
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage The client&#39;s accepted languages. One or several (e.g. fr,de,en)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InstrumentationStatusResponse} and HTTP response
     */
    this.getInstrumentationStatusByIdWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getInstrumentationStatusById");
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
      var returnType = InstrumentationStatusResponse;

      return this.apiClient.callApi(
        '/instrumentation/statuses/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a single instrumentation status
     * Get a specific instrumentation status identified by the id in the URL. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translation set Accept-Language.
     * @param {Number} id Id of instrumentation status to fetch
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage The client&#39;s accepted languages. One or several (e.g. fr,de,en)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InstrumentationStatusResponse}
     */
    this.getInstrumentationStatusById = function(id, opts) {
      return this.getInstrumentationStatusByIdWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a range of instrumentation statuses
     * Returns a list of all event statuses that are available in your scope. You can apply the query parameters listed below to get a filtered list. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translation set Accept-Language.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number to load
     * @param {Number} opts.perPage Number of items to load per page
     * @param {String} opts.name searches instrumentation statuses with given name
     * @param {String} opts.tenantId One or multiple ids (comma list). Expected id format is integer
     * @param {String} opts.code Filter accepts &#x60;*&#x60; as wildcard
     * @param {String} opts.orderBy Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60;
     * @param {String} opts.acceptLanguage The client&#39;s accepted languages. One or several (e.g. fr,de,en)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InstrumentationStatuses1} and HTTP response
     */
    this.getInstrumentationStatusesWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
        'name': opts['name'],
        'tenant_id': opts['tenantId'],
        'code': opts['code'],
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
      var returnType = InstrumentationStatuses1;

      return this.apiClient.callApi(
        '/instrumentation/statuses', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a range of instrumentation statuses
     * Returns a list of all event statuses that are available in your scope. You can apply the query parameters listed below to get a filtered list. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translation set Accept-Language.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number to load
     * @param {Number} opts.perPage Number of items to load per page
     * @param {String} opts.name searches instrumentation statuses with given name
     * @param {String} opts.tenantId One or multiple ids (comma list). Expected id format is integer
     * @param {String} opts.code Filter accepts &#x60;*&#x60; as wildcard
     * @param {String} opts.orderBy Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60;
     * @param {String} opts.acceptLanguage The client&#39;s accepted languages. One or several (e.g. fr,de,en)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InstrumentationStatuses1}
     */
    this.getInstrumentationStatuses = function(opts) {
      return this.getInstrumentationStatusesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get all possible statuses of the specified instrumentation
     * Returns a list of all possible instrumentation statuses for the specified instrument. You can apply the query parameters listed below to get a filtered list. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translation set Accept-Language.
     * @param {Number} instrumentationId Id of the instrumentation
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number to load
     * @param {Number} opts.perPage Number of items to load per page
     * @param {String} opts.tenantId One or multiple ids (comma list). Expected id format is integer
     * @param {String} opts.name Filter accepts &#x60;*&#x60; as wildcard
     * @param {String} opts.code Filter accepts &#x60;*&#x60; as wildcard
     * @param {String} opts.acceptLanguage The client&#39;s accepted languages. One or several (e.g. fr,de,en)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InstrumentationStatuses} and HTTP response
     */
    this.getInstrumentationStatusesOptionsWithHttpInfo = function(instrumentationId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'instrumentationId' is set
      if (instrumentationId === undefined || instrumentationId === null) {
        throw new Error("Missing the required parameter 'instrumentationId' when calling getInstrumentationStatusesOptions");
      }


      var pathParams = {
        'instrumentation_id': instrumentationId
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
        'tenant_id': opts['tenantId'],
        'name': opts['name'],
        'code': opts['code'],
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
      var returnType = InstrumentationStatuses;

      return this.apiClient.callApi(
        '/instrumentations/{instrumentation_id}/status-options', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get all possible statuses of the specified instrumentation
     * Returns a list of all possible instrumentation statuses for the specified instrument. You can apply the query parameters listed below to get a filtered list. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translation set Accept-Language.
     * @param {Number} instrumentationId Id of the instrumentation
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number to load
     * @param {Number} opts.perPage Number of items to load per page
     * @param {String} opts.tenantId One or multiple ids (comma list). Expected id format is integer
     * @param {String} opts.name Filter accepts &#x60;*&#x60; as wildcard
     * @param {String} opts.code Filter accepts &#x60;*&#x60; as wildcard
     * @param {String} opts.acceptLanguage The client&#39;s accepted languages. One or several (e.g. fr,de,en)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InstrumentationStatuses}
     */
    this.getInstrumentationStatusesOptions = function(instrumentationId, opts) {
      return this.getInstrumentationStatusesOptionsWithHttpInfo(instrumentationId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update an instrumentation status
     * Update accessible parameters of the requested resource. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To add a translation set Content-Language.
     * @param {Number} id Id of the instrumentation status to update
     * @param {module:model/InstrumentationStatusRequest} body Parameters that shall be updated.
     * @param {Object} opts Optional parameters
     * @param {String} opts.contentLanguage language of the content
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.updateInstrumentationStatusWithHttpInfo = function(id, body, opts) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateInstrumentationStatus");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateInstrumentationStatus");
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
        '/instrumentation/statuses/{id}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update an instrumentation status
     * Update accessible parameters of the requested resource. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To add a translation set Content-Language.
     * @param {Number} id Id of the instrumentation status to update
     * @param {module:model/InstrumentationStatusRequest} body Parameters that shall be updated.
     * @param {Object} opts Optional parameters
     * @param {String} opts.contentLanguage language of the content
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.updateInstrumentationStatus = function(id, body, opts) {
      return this.updateInstrumentationStatusWithHttpInfo(id, body, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
