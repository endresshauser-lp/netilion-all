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
    define(['ApiClient', 'model/AdminIDs', 'model/ErrorResponse', 'model/TenantRequest', 'model/TenantResponse', 'model/Tenants', 'model/TenantsResponse', 'model/UserIDs', 'model/UsersPublicResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AdminIDs'), require('../model/ErrorResponse'), require('../model/TenantRequest'), require('../model/TenantResponse'), require('../model/Tenants'), require('../model/TenantsResponse'), require('../model/UserIDs'), require('../model/UsersPublicResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.NetilionApiDocumentation) {
      root.NetilionApiDocumentation = {};
    }
    root.NetilionApiDocumentation.TenantApi = factory(root.NetilionApiDocumentation.ApiClient, root.NetilionApiDocumentation.AdminIDs, root.NetilionApiDocumentation.ErrorResponse, root.NetilionApiDocumentation.TenantRequest, root.NetilionApiDocumentation.TenantResponse, root.NetilionApiDocumentation.Tenants, root.NetilionApiDocumentation.TenantsResponse, root.NetilionApiDocumentation.UserIDs, root.NetilionApiDocumentation.UsersPublicResponse);
  }
}(this, function(ApiClient, AdminIDs, ErrorResponse, TenantRequest, TenantResponse, Tenants, TenantsResponse, UserIDs, UsersPublicResponse) {
  'use strict';

  /**
   * Tenant service.
   * @module api/TenantApi
   * @version 01.00.00
   */

  /**
   * Constructs a new TenantApi. 
   * @alias module:api/TenantApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Add admins to a tenant
     * Add admins to a tenant. Only an admin of a tenant can add additional admins.
     * @param {Number} tenantId Id of the tenant to which the users will be added as admins
     * @param {module:model/AdminIDs} body Object body that will be created. Tenant name is required
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.addTenantAdminsWithHttpInfo = function(tenantId, body) {
      var postBody = body;

      // verify the required parameter 'tenantId' is set
      if (tenantId === undefined || tenantId === null) {
        throw new Error("Missing the required parameter 'tenantId' when calling addTenantAdmins");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addTenantAdmins");
      }


      var pathParams = {
        'tenant_id': tenantId
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
        '/tenants/{tenant_id}/admins', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Add admins to a tenant
     * Add admins to a tenant. Only an admin of a tenant can add additional admins.
     * @param {Number} tenantId Id of the tenant to which the users will be added as admins
     * @param {module:model/AdminIDs} body Object body that will be created. Tenant name is required
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.addTenantAdmins = function(tenantId, body) {
      return this.addTenantAdminsWithHttpInfo(tenantId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Add users to a tenant
     * Add users to a tenant. Only an admin of a tenant can add additional users.
     * @param {Number} tenantId Id of the tenant to which the users will be added
     * @param {module:model/UserIDs} body Object body that will be created. Tenant name is required
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.addTenantUsersWithHttpInfo = function(tenantId, body) {
      var postBody = body;

      // verify the required parameter 'tenantId' is set
      if (tenantId === undefined || tenantId === null) {
        throw new Error("Missing the required parameter 'tenantId' when calling addTenantUsers");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addTenantUsers");
      }


      var pathParams = {
        'tenant_id': tenantId
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
        '/tenants/{tenant_id}/users', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Add users to a tenant
     * Add users to a tenant. Only an admin of a tenant can add additional users.
     * @param {Number} tenantId Id of the tenant to which the users will be added
     * @param {module:model/UserIDs} body Object body that will be created. Tenant name is required
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.addTenantUsers = function(tenantId, body) {
      return this.addTenantUsersWithHttpInfo(tenantId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a new tenant
     * Create a new tenant. The name of the given tenant needs to be unique. The tenant will not be created when this constraint is violated.
     * @param {module:model/TenantRequest} body Object body that will be created. Tenant name is required
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TenantResponse} and HTTP response
     */
    this.createTenantsWithHttpInfo = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createTenants");
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
      var returnType = TenantResponse;

      return this.apiClient.callApi(
        '/tenants', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a new tenant
     * Create a new tenant. The name of the given tenant needs to be unique. The tenant will not be created when this constraint is violated.
     * @param {module:model/TenantRequest} body Object body that will be created. Tenant name is required
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TenantResponse}
     */
    this.createTenants = function(body) {
      return this.createTenantsWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a tenant
     * Delete a specific resource in your accessible scope, identified by the id in the URL.
     * @param {Number} id Id of the tenant to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteTenantWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteTenant");
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
        '/tenants/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a tenant
     * Delete a specific resource in your accessible scope, identified by the id in the URL.
     * @param {Number} id Id of the tenant to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteTenant = function(id) {
      return this.deleteTenantWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get all possible tenants of the specified assets
     * Returns a list of all possible tenants for the specified asset. That is all public tenants and the assets tenant. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array.
     * @param {Number} assetId Id of the specified asset
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number to load
     * @param {Number} opts.perPage Number of items to load per page
     * @param {String} opts.name Filter accepts &#x60;*&#x60; as wildcard
     * @param {String} opts.orderBy Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Tenants} and HTTP response
     */
    this.getAssetTenantOptionsWithHttpInfo = function(assetId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'assetId' is set
      if (assetId === undefined || assetId === null) {
        throw new Error("Missing the required parameter 'assetId' when calling getAssetTenantOptions");
      }


      var pathParams = {
        'asset_id': assetId
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
        'name': opts['name'],
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
      var returnType = Tenants;

      return this.apiClient.callApi(
        '/assets/{asset_id}/tenant-options', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get all possible tenants of the specified assets
     * Returns a list of all possible tenants for the specified asset. That is all public tenants and the assets tenant. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array.
     * @param {Number} assetId Id of the specified asset
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number to load
     * @param {Number} opts.perPage Number of items to load per page
     * @param {String} opts.name Filter accepts &#x60;*&#x60; as wildcard
     * @param {String} opts.orderBy Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Tenants}
     */
    this.getAssetTenantOptions = function(assetId, opts) {
      return this.getAssetTenantOptionsWithHttpInfo(assetId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get all admins of a tenant
     * Returns a list of all admins that are available for the tenant. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array.
     * @param {Number} tenantId The resource defined in the URL
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number to load
     * @param {Number} opts.perPage Number of items to load per page
     * @param {String} opts.include Comma separated list of objects to include in response
     * @param {String} opts.firstName Filter accepts &#x60;*&#x60; as wildcard
     * @param {String} opts.lastName Filter accepts &#x60;*&#x60; as wildcard
     * @param {String} opts.orderBy Order result by attribute value, accepts &#x60;id&#x60;, &#x60;email&#x60;, &#x60;first_name&#x60;, &#x60;last_name&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UsersPublicResponse} and HTTP response
     */
    this.getTenantAdminsWithHttpInfo = function(tenantId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'tenantId' is set
      if (tenantId === undefined || tenantId === null) {
        throw new Error("Missing the required parameter 'tenantId' when calling getTenantAdmins");
      }


      var pathParams = {
        'tenant_id': tenantId
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
        'include': opts['include'],
        'first_name': opts['firstName'],
        'last_name': opts['lastName'],
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
      var returnType = UsersPublicResponse;

      return this.apiClient.callApi(
        '/tenants/{tenant_id}/admins', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get all admins of a tenant
     * Returns a list of all admins that are available for the tenant. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array.
     * @param {Number} tenantId The resource defined in the URL
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number to load
     * @param {Number} opts.perPage Number of items to load per page
     * @param {String} opts.include Comma separated list of objects to include in response
     * @param {String} opts.firstName Filter accepts &#x60;*&#x60; as wildcard
     * @param {String} opts.lastName Filter accepts &#x60;*&#x60; as wildcard
     * @param {String} opts.orderBy Order result by attribute value, accepts &#x60;id&#x60;, &#x60;email&#x60;, &#x60;first_name&#x60;, &#x60;last_name&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UsersPublicResponse}
     */
    this.getTenantAdmins = function(tenantId, opts) {
      return this.getTenantAdminsWithHttpInfo(tenantId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get all users of a tenant
     * Returns a list of all users that are available for the tenant. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array.
     * @param {Number} tenantId The resource defined in the URL
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number to load
     * @param {Number} opts.perPage Number of items to load per page
     * @param {String} opts.firstName Filter accepts &#x60;*&#x60; as wildcard
     * @param {String} opts.lastName Filter accepts &#x60;*&#x60; as wildcard
     * @param {String} opts.orderBy Order result by attribute value, accepts &#x60;id&#x60;, &#x60;email&#x60;, &#x60;first_name&#x60;, &#x60;last_name&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UsersPublicResponse} and HTTP response
     */
    this.getTenantUsersWithHttpInfo = function(tenantId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'tenantId' is set
      if (tenantId === undefined || tenantId === null) {
        throw new Error("Missing the required parameter 'tenantId' when calling getTenantUsers");
      }


      var pathParams = {
        'tenant_id': tenantId
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
        'first_name': opts['firstName'],
        'last_name': opts['lastName'],
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
      var returnType = UsersPublicResponse;

      return this.apiClient.callApi(
        '/tenants/{tenant_id}/users', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get all users of a tenant
     * Returns a list of all users that are available for the tenant. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array.
     * @param {Number} tenantId The resource defined in the URL
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number to load
     * @param {Number} opts.perPage Number of items to load per page
     * @param {String} opts.firstName Filter accepts &#x60;*&#x60; as wildcard
     * @param {String} opts.lastName Filter accepts &#x60;*&#x60; as wildcard
     * @param {String} opts.orderBy Order result by attribute value, accepts &#x60;id&#x60;, &#x60;email&#x60;, &#x60;first_name&#x60;, &#x60;last_name&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UsersPublicResponse}
     */
    this.getTenantUsers = function(tenantId, opts) {
      return this.getTenantUsersWithHttpInfo(tenantId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a range of tenants
     * Returns a list of tenants in your accessible scope. If the query has no matches, the response is an empty list.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number to load
     * @param {Number} opts.perPage Number of items to load per page
     * @param {String} opts.name Filter accepts &#x60;*&#x60; as wildcard
     * @param {String} opts.adminUserId One or multiple ids (comma list). Expected id format is integer
     * @param {Boolean} opts._public Valid values are true and false
     * @param {String} opts.orderBy Order result by attribute value, accepts &#x60;id&#x60;, &#x60;name&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TenantsResponse} and HTTP response
     */
    this.getTenantsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
        'name': opts['name'],
        'admin_user_id': opts['adminUserId'],
        'public': opts['_public'],
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
      var returnType = TenantsResponse;

      return this.apiClient.callApi(
        '/tenants', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a range of tenants
     * Returns a list of tenants in your accessible scope. If the query has no matches, the response is an empty list.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number to load
     * @param {Number} opts.perPage Number of items to load per page
     * @param {String} opts.name Filter accepts &#x60;*&#x60; as wildcard
     * @param {String} opts.adminUserId One or multiple ids (comma list). Expected id format is integer
     * @param {Boolean} opts._public Valid values are true and false
     * @param {String} opts.orderBy Order result by attribute value, accepts &#x60;id&#x60;, &#x60;name&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TenantsResponse}
     */
    this.getTenants = function(opts) {
      return this.getTenantsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a single tenant
     * Get a specific tenant in your accessible scope, identified by the id in the URL.
     * @param {Number} id Id of the tenant to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TenantResponse} and HTTP response
     */
    this.getTenantsByIdWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getTenantsById");
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
      var returnType = TenantResponse;

      return this.apiClient.callApi(
        '/tenants/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a single tenant
     * Get a specific tenant in your accessible scope, identified by the id in the URL.
     * @param {Number} id Id of the tenant to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TenantResponse}
     */
    this.getTenantsById = function(id) {
      return this.getTenantsByIdWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Remove admins from a tenant
     * Remove one or more admins from a tenant identified by id in the url.
     * @param {Number} tenantId Id of the tenant from which the admins will be removed
     * @param {module:model/AdminIDs} body Resources that shall be removed.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.removeTenantAdminsWithHttpInfo = function(tenantId, body) {
      var postBody = body;

      // verify the required parameter 'tenantId' is set
      if (tenantId === undefined || tenantId === null) {
        throw new Error("Missing the required parameter 'tenantId' when calling removeTenantAdmins");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling removeTenantAdmins");
      }


      var pathParams = {
        'tenant_id': tenantId
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
        '/tenants/{tenant_id}/admins', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Remove admins from a tenant
     * Remove one or more admins from a tenant identified by id in the url.
     * @param {Number} tenantId Id of the tenant from which the admins will be removed
     * @param {module:model/AdminIDs} body Resources that shall be removed.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.removeTenantAdmins = function(tenantId, body) {
      return this.removeTenantAdminsWithHttpInfo(tenantId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Remove users from a tenant
     * Remove one or more users from a tenant identified by id in the url.
     * @param {Number} tenantId Id of the tenant from which the admins will be removed
     * @param {module:model/UserIDs} body Resources that shall be removed.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.removeTenantUsersWithHttpInfo = function(tenantId, body) {
      var postBody = body;

      // verify the required parameter 'tenantId' is set
      if (tenantId === undefined || tenantId === null) {
        throw new Error("Missing the required parameter 'tenantId' when calling removeTenantUsers");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling removeTenantUsers");
      }


      var pathParams = {
        'tenant_id': tenantId
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
        '/tenants/{tenant_id}/users', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Remove users from a tenant
     * Remove one or more users from a tenant identified by id in the url.
     * @param {Number} tenantId Id of the tenant from which the admins will be removed
     * @param {module:model/UserIDs} body Resources that shall be removed.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.removeTenantUsers = function(tenantId, body) {
      return this.removeTenantUsersWithHttpInfo(tenantId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Replace the admins of a tenant
     * Replaces all admins of the tenant. You can send a list of resources that will replace all previous values.
     * @param {Number} tenantId Id of the tenant of which the admins will be replaced
     * @param {module:model/AdminIDs} body Resources that shall be replaced
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.replaceTenantAdminsWithHttpInfo = function(tenantId, body) {
      var postBody = body;

      // verify the required parameter 'tenantId' is set
      if (tenantId === undefined || tenantId === null) {
        throw new Error("Missing the required parameter 'tenantId' when calling replaceTenantAdmins");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling replaceTenantAdmins");
      }


      var pathParams = {
        'tenant_id': tenantId
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
        '/tenants/{tenant_id}/admins', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Replace the admins of a tenant
     * Replaces all admins of the tenant. You can send a list of resources that will replace all previous values.
     * @param {Number} tenantId Id of the tenant of which the admins will be replaced
     * @param {module:model/AdminIDs} body Resources that shall be replaced
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.replaceTenantAdmins = function(tenantId, body) {
      return this.replaceTenantAdminsWithHttpInfo(tenantId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Replace the users of a tenant
     * Replaces all users of the tenant. You can send a list of resources that will replace all previous values.
     * @param {Number} tenantId Id of the tenant of which the users will be replaced
     * @param {module:model/UserIDs} body Resources that shall be replaced
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.replaceTenantUsersWithHttpInfo = function(tenantId, body) {
      var postBody = body;

      // verify the required parameter 'tenantId' is set
      if (tenantId === undefined || tenantId === null) {
        throw new Error("Missing the required parameter 'tenantId' when calling replaceTenantUsers");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling replaceTenantUsers");
      }


      var pathParams = {
        'tenant_id': tenantId
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
        '/tenants/{tenant_id}/users', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Replace the users of a tenant
     * Replaces all users of the tenant. You can send a list of resources that will replace all previous values.
     * @param {Number} tenantId Id of the tenant of which the users will be replaced
     * @param {module:model/UserIDs} body Resources that shall be replaced
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.replaceTenantUsers = function(tenantId, body) {
      return this.replaceTenantUsersWithHttpInfo(tenantId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a tenant
     * Update accessible parameters of the requested resource in your accessible scope.
     * @param {Number} id Id of the tenant to update
     * @param {module:model/TenantRequest} body Parameters that shall be updated.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.updateTenantWithHttpInfo = function(id, body) {
      var postBody = body;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateTenant");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateTenant");
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
        '/tenants/{id}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a tenant
     * Update accessible parameters of the requested resource in your accessible scope.
     * @param {Number} id Id of the tenant to update
     * @param {module:model/TenantRequest} body Parameters that shall be updated.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.updateTenant = function(id, body) {
      return this.updateTenantWithHttpInfo(id, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));