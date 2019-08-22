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
    define(['ApiClient', 'model/DeliveryStatusRequest', 'model/DeliveryStatusResponse', 'model/DeliveryStatuses', 'model/ErrorResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DeliveryStatusRequest'), require('../model/DeliveryStatusResponse'), require('../model/DeliveryStatuses'), require('../model/ErrorResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.NetilionApiDocumentation) {
      root.NetilionApiDocumentation = {};
    }
    root.NetilionApiDocumentation.DeliveryStatusApi = factory(root.NetilionApiDocumentation.ApiClient, root.NetilionApiDocumentation.DeliveryStatusRequest, root.NetilionApiDocumentation.DeliveryStatusResponse, root.NetilionApiDocumentation.DeliveryStatuses, root.NetilionApiDocumentation.ErrorResponse);
  }
}(this, function(ApiClient, DeliveryStatusRequest, DeliveryStatusResponse, DeliveryStatuses, ErrorResponse) {
  'use strict';

  /**
   * DeliveryStatus service.
   * @module api/DeliveryStatusApi
   * @version 01.00.00
   */

  /**
   * Constructs a new DeliveryStatusApi. 
   * @alias module:api/DeliveryStatusApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a new delivery status
     * Code must be unique. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. POST sets values in default language: en.
     * @param {module:model/DeliveryStatusRequest} body DeliveryStatus object to create.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeliveryStatusRequest} and HTTP response
     */
    this.createDeliveryStatusWithHttpInfo = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createDeliveryStatus");
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
      var returnType = DeliveryStatusRequest;

      return this.apiClient.callApi(
        '/delivery/statuses', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a new delivery status
     * Code must be unique. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. POST sets values in default language: en.
     * @param {module:model/DeliveryStatusRequest} body DeliveryStatus object to create.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeliveryStatusRequest}
     */
    this.createDeliveryStatus = function(body) {
      return this.createDeliveryStatusWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a delivery status
     * Delete a specific resource identified by the id in the URL.
     * @param {Number} id Id of the delivery status to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteDeliveryStatusWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteDeliveryStatus");
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
        '/delivery/statuses/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a delivery status
     * Delete a specific resource identified by the id in the URL.
     * @param {Number} id Id of the delivery status to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteDeliveryStatus = function(id) {
      return this.deleteDeliveryStatusWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the status of the specific delivery
     * Returns the status of the delivery. You can apply the query parameters listed below to get a filtered list. Required Permissions: &#x60;&#x60;&#x60;can_read&#x60;&#x60;&#x60; Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To add a translation set Content-Language. Possible include value: &#x60;&#x60;&#x60;tenant&#x60;&#x60;&#x60;
     * @param {Number} deliveryId Id of the specified delivery
     * @param {Object} opts Optional parameters
     * @param {String} opts.include Comma separated list of objects to include in response
     * @param {String} opts.acceptLanguage The client&#39;s accepted languages. One or several (e.g. fr,de,en)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeliveryStatusResponse} and HTTP response
     */
    this.getDeliveryIdStatusWithHttpInfo = function(deliveryId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'deliveryId' is set
      if (deliveryId === undefined || deliveryId === null) {
        throw new Error("Missing the required parameter 'deliveryId' when calling getDeliveryIdStatus");
      }


      var pathParams = {
        'delivery_id': deliveryId
      };
      var queryParams = {
        'include': opts['include'],
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
      var returnType = DeliveryStatusResponse;

      return this.apiClient.callApi(
        '/deliveries/{delivery_id}/status', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get the status of the specific delivery
     * Returns the status of the delivery. You can apply the query parameters listed below to get a filtered list. Required Permissions: &#x60;&#x60;&#x60;can_read&#x60;&#x60;&#x60; Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To add a translation set Content-Language. Possible include value: &#x60;&#x60;&#x60;tenant&#x60;&#x60;&#x60;
     * @param {Number} deliveryId Id of the specified delivery
     * @param {Object} opts Optional parameters
     * @param {String} opts.include Comma separated list of objects to include in response
     * @param {String} opts.acceptLanguage The client&#39;s accepted languages. One or several (e.g. fr,de,en)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeliveryStatusResponse}
     */
    this.getDeliveryIdStatus = function(deliveryId, opts) {
      return this.getDeliveryIdStatusWithHttpInfo(deliveryId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a single delivery status
     * Get a specific delivery status identified by the id in the URL. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translations set Accept-Language.
     * @param {Number} id Id of delivery status to fetch
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage The client&#39;s accepted languages. One or several (e.g. fr,de,en)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeliveryStatusResponse} and HTTP response
     */
    this.getDeliveryStatusByIdWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getDeliveryStatusById");
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
      var returnType = DeliveryStatusResponse;

      return this.apiClient.callApi(
        '/delivery/statuses/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a single delivery status
     * Get a specific delivery status identified by the id in the URL. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translations set Accept-Language.
     * @param {Number} id Id of delivery status to fetch
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage The client&#39;s accepted languages. One or several (e.g. fr,de,en)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeliveryStatusResponse}
     */
    this.getDeliveryStatusById = function(id, opts) {
      return this.getDeliveryStatusByIdWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a range of delivery statuses
     * Returns a list of all delivery statuses that are available in your scope. You can apply the query parameters listed below to get a filtered list. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translations set Accept-Language.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number to load
     * @param {Number} opts.perPage Number of items to load per page
     * @param {String} opts.code Filter accepts &#x60;*&#x60; as wildcard
     * @param {String} opts.name Filter accepts &#x60;*&#x60; as wildcard
     * @param {String} opts.tenantId One or multiple ids (comma list). Expected id format is integer
     * @param {String} opts.orderBy Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60;
     * @param {String} opts.acceptLanguage The client&#39;s accepted languages. One or several (e.g. fr,de,en)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeliveryStatuses} and HTTP response
     */
    this.getDeliveryStatusesWithHttpInfo = function(opts) {
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
      var returnType = DeliveryStatuses;

      return this.apiClient.callApi(
        '/delivery/statuses', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a range of delivery statuses
     * Returns a list of all delivery statuses that are available in your scope. You can apply the query parameters listed below to get a filtered list. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translations set Accept-Language.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number to load
     * @param {Number} opts.perPage Number of items to load per page
     * @param {String} opts.code Filter accepts &#x60;*&#x60; as wildcard
     * @param {String} opts.name Filter accepts &#x60;*&#x60; as wildcard
     * @param {String} opts.tenantId One or multiple ids (comma list). Expected id format is integer
     * @param {String} opts.orderBy Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60;
     * @param {String} opts.acceptLanguage The client&#39;s accepted languages. One or several (e.g. fr,de,en)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeliveryStatuses}
     */
    this.getDeliveryStatuses = function(opts) {
      return this.getDeliveryStatusesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update an delivery status
     * Update accessible parameters of the requested resource. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To add a translation set Content-Language.
     * @param {Number} id Id of the delivery to update
     * @param {module:model/DeliveryStatusRequest} body Parameters that shall be updated.
     * @param {Object} opts Optional parameters
     * @param {String} opts.contentLanguage language of the content
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.updateDeliveryStatusesWithHttpInfo = function(id, body, opts) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateDeliveryStatuses");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateDeliveryStatuses");
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
        '/delivery/statuses/{id}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update an delivery status
     * Update accessible parameters of the requested resource. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To add a translation set Content-Language.
     * @param {Number} id Id of the delivery to update
     * @param {module:model/DeliveryStatusRequest} body Parameters that shall be updated.
     * @param {Object} opts Optional parameters
     * @param {String} opts.contentLanguage language of the content
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.updateDeliveryStatuses = function(id, body, opts) {
      return this.updateDeliveryStatusesWithHttpInfo(id, body, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
