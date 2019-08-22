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
    define(['ApiClient', 'model/ErrorResponse', 'model/ProductStatusRequest', 'model/ProductStatusResponse', 'model/ProductStatuses'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ErrorResponse'), require('../model/ProductStatusRequest'), require('../model/ProductStatusResponse'), require('../model/ProductStatuses'));
  } else {
    // Browser globals (root is window)
    if (!root.NetilionApiDocumentation) {
      root.NetilionApiDocumentation = {};
    }
    root.NetilionApiDocumentation.ProductStatusApi = factory(root.NetilionApiDocumentation.ApiClient, root.NetilionApiDocumentation.ErrorResponse, root.NetilionApiDocumentation.ProductStatusRequest, root.NetilionApiDocumentation.ProductStatusResponse, root.NetilionApiDocumentation.ProductStatuses);
  }
}(this, function(ApiClient, ErrorResponse, ProductStatusRequest, ProductStatusResponse, ProductStatuses) {
  'use strict';

  /**
   * ProductStatus service.
   * @module api/ProductStatusApi
   * @version 01.00.00
   */

  /**
   * Constructs a new ProductStatusApi. 
   * @alias module:api/ProductStatusApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Delete a product status
     * Delete the given product status identified by id
     * @param {Number} id Id of the product status to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteProductStatusWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteProductStatus");
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
        '/product/statuses/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a product status
     * Delete the given product status identified by id
     * @param {Number} id Id of the product status to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteProductStatus = function(id) {
      return this.deleteProductStatusWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the status of a specific product
     * Returns the status of the product. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translations set Accept-Language.
     * @param {Number} productId Id of the specified product
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage The client&#39;s accepted languages. One or several (e.g. fr,de,en)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProductStatusResponse} and HTTP response
     */
    this.getProductIdStatusWithHttpInfo = function(productId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling getProductIdStatus");
      }


      var pathParams = {
        'product_id': productId
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
      var returnType = ProductStatusResponse;

      return this.apiClient.callApi(
        '/products/{product_id}/status', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get the status of a specific product
     * Returns the status of the product. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translations set Accept-Language.
     * @param {Number} productId Id of the specified product
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage The client&#39;s accepted languages. One or several (e.g. fr,de,en)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProductStatusResponse}
     */
    this.getProductIdStatus = function(productId, opts) {
      return this.getProductIdStatusWithHttpInfo(productId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a single product status
     * Get a specific product status identified by the id in the URL. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translations set Accept-Language.
     * @param {Number} id Id of product status to fetch
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage The client&#39;s accepted languages. One or several (e.g. fr,de,en)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProductStatusResponse} and HTTP response
     */
    this.getProductStatusByIdWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getProductStatusById");
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
      var returnType = ProductStatusResponse;

      return this.apiClient.callApi(
        '/product/statuses/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a single product status
     * Get a specific product status identified by the id in the URL. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translations set Accept-Language.
     * @param {Number} id Id of product status to fetch
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage The client&#39;s accepted languages. One or several (e.g. fr,de,en)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProductStatusResponse}
     */
    this.getProductStatusById = function(id, opts) {
      return this.getProductStatusByIdWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a range of product statuses
     * Returns a list of all product statuses that are available in your scope. You can apply the query parameters listed below to get a filtered list. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translations set Accept-Language.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number to load
     * @param {Number} opts.perPage Number of items to load per page
     * @param {String} opts.name Filter accepts &#x60;*&#x60; as wildcard
     * @param {String} opts.tenantId One or multiple ids (comma list). Expected id format is integer
     * @param {String} opts.code Filter accepts &#x60;*&#x60; as wildcard
     * @param {String} opts.orderBy Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60;
     * @param {String} opts.acceptLanguage The client&#39;s accepted languages. One or several (e.g. fr,de,en)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProductStatuses} and HTTP response
     */
    this.getProductStatusesWithHttpInfo = function(opts) {
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
      var returnType = ProductStatuses;

      return this.apiClient.callApi(
        '/product/statuses', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a range of product statuses
     * Returns a list of all product statuses that are available in your scope. You can apply the query parameters listed below to get a filtered list. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translations set Accept-Language.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number to load
     * @param {Number} opts.perPage Number of items to load per page
     * @param {String} opts.name Filter accepts &#x60;*&#x60; as wildcard
     * @param {String} opts.tenantId One or multiple ids (comma list). Expected id format is integer
     * @param {String} opts.code Filter accepts &#x60;*&#x60; as wildcard
     * @param {String} opts.orderBy Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60;
     * @param {String} opts.acceptLanguage The client&#39;s accepted languages. One or several (e.g. fr,de,en)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProductStatuses}
     */
    this.getProductStatuses = function(opts) {
      return this.getProductStatusesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get all possible statuses for the specified product
     * Returns a list of all possible product statuses for the specified product. You can apply the query parameters listed below to get a filtered list. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translations set Accept-Language.
     * @param {Number} productId Id of the specified product
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number to load
     * @param {Number} opts.perPage Number of items to load per page
     * @param {String} opts.name Filter accepts &#x60;*&#x60; as wildcard
     * @param {String} opts.tenantId One or multiple ids (comma list). Expected id format is integer
     * @param {String} opts.code Filter accepts &#x60;*&#x60; as wildcard
     * @param {String} opts.orderBy Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60;
     * @param {String} opts.acceptLanguage The client&#39;s accepted languages. One or several (e.g. fr,de,en)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProductStatuses} and HTTP response
     */
    this.getProductStatusesOptionsWithHttpInfo = function(productId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling getProductStatusesOptions");
      }


      var pathParams = {
        'product_id': productId
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
      var returnType = ProductStatuses;

      return this.apiClient.callApi(
        '/products/{product_id}/status-options', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get all possible statuses for the specified product
     * Returns a list of all possible product statuses for the specified product. You can apply the query parameters listed below to get a filtered list. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translations set Accept-Language.
     * @param {Number} productId Id of the specified product
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number to load
     * @param {Number} opts.perPage Number of items to load per page
     * @param {String} opts.name Filter accepts &#x60;*&#x60; as wildcard
     * @param {String} opts.tenantId One or multiple ids (comma list). Expected id format is integer
     * @param {String} opts.code Filter accepts &#x60;*&#x60; as wildcard
     * @param {String} opts.orderBy Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60;
     * @param {String} opts.acceptLanguage The client&#39;s accepted languages. One or several (e.g. fr,de,en)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProductStatuses}
     */
    this.getProductStatusesOptions = function(productId, opts) {
      return this.getProductStatusesOptionsWithHttpInfo(productId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a product status
     * Updates accessible parameters of selected product status. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To add a translation set Content-Language.
     * @param {Number} id Id of the product status to update
     * @param {module:model/ProductStatusRequest} body Parameters that shall be updated.
     * @param {Object} opts Optional parameters
     * @param {String} opts.contentLanguage language of the content
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.updateProductStatusWithHttpInfo = function(id, body, opts) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateProductStatus");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateProductStatus");
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
        '/product/statuses/{id}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a product status
     * Updates accessible parameters of selected product status. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To add a translation set Content-Language.
     * @param {Number} id Id of the product status to update
     * @param {module:model/ProductStatusRequest} body Parameters that shall be updated.
     * @param {Object} opts Optional parameters
     * @param {String} opts.contentLanguage language of the content
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.updateProductStatus = function(id, body, opts) {
      return this.updateProductStatusWithHttpInfo(id, body, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
