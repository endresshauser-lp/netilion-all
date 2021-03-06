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
    define(['ApiClient', 'model/ErrorResponse', 'model/NodeTypeRequest', 'model/NodeTypeResponse', 'model/NodeTypes'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ErrorResponse'), require('../model/NodeTypeRequest'), require('../model/NodeTypeResponse'), require('../model/NodeTypes'));
  } else {
    // Browser globals (root is window)
    if (!root.NetilionApiDocumentation) {
      root.NetilionApiDocumentation = {};
    }
    root.NetilionApiDocumentation.NodeTypeApi = factory(root.NetilionApiDocumentation.ApiClient, root.NetilionApiDocumentation.ErrorResponse, root.NetilionApiDocumentation.NodeTypeRequest, root.NetilionApiDocumentation.NodeTypeResponse, root.NetilionApiDocumentation.NodeTypes);
  }
}(this, function(ApiClient, ErrorResponse, NodeTypeRequest, NodeTypeResponse, NodeTypes) {
  'use strict';

  /**
   * NodeType service.
   * @module api/NodeTypeApi
   * @version 01.00.00
   */

  /**
   * Constructs a new NodeTypeApi. 
   * @alias module:api/NodeTypeApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a new node type
     * Code must be unique. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. POST sets values in default language: en.
     * @param {module:model/NodeTypeRequest} body NodeType object to create.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NodeTypeResponse} and HTTP response
     */
    this.createNodeTypeWithHttpInfo = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createNodeType");
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
      var returnType = NodeTypeResponse;

      return this.apiClient.callApi(
        '/node/types', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a new node type
     * Code must be unique. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. POST sets values in default language: en.
     * @param {module:model/NodeTypeRequest} body NodeType object to create.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NodeTypeResponse}
     */
    this.createNodeType = function(body) {
      return this.createNodeTypeWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a node type
     * Delete a specific resource identified by the id in the URL.
     * @param {Number} id Id of the node type to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteNodeTypeWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteNodeType");
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
        '/node/types/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a node type
     * Delete a specific resource identified by the id in the URL.
     * @param {Number} id Id of the node type to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteNodeType = function(id) {
      return this.deleteNodeTypeWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the type of the specific node
     * Returns the type of the node. Needed if only permission on node but not on tenant. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translation set Accept-Language. Possible include values: &#x60;&#x60;&#x60;tenant&#x60;&#x60;&#x60;
     * @param {Number} nodeId Id of the node
     * @param {Object} opts Optional parameters
     * @param {String} opts.include Comma separated list of objects to include in response
     * @param {String} opts.acceptLanguage The client&#39;s accepted languages. One or several (e.g. fr,de,en)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NodeTypeResponse} and HTTP response
     */
    this.getNodeIdTypeWithHttpInfo = function(nodeId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'nodeId' is set
      if (nodeId === undefined || nodeId === null) {
        throw new Error("Missing the required parameter 'nodeId' when calling getNodeIdType");
      }


      var pathParams = {
        'node_id': nodeId
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
      var returnType = NodeTypeResponse;

      return this.apiClient.callApi(
        '/nodes/{node_id}/type', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get the type of the specific node
     * Returns the type of the node. Needed if only permission on node but not on tenant. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translation set Accept-Language. Possible include values: &#x60;&#x60;&#x60;tenant&#x60;&#x60;&#x60;
     * @param {Number} nodeId Id of the node
     * @param {Object} opts Optional parameters
     * @param {String} opts.include Comma separated list of objects to include in response
     * @param {String} opts.acceptLanguage The client&#39;s accepted languages. One or several (e.g. fr,de,en)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NodeTypeResponse}
     */
    this.getNodeIdType = function(nodeId, opts) {
      return this.getNodeIdTypeWithHttpInfo(nodeId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a single node type
     * Get a specific node type identified by the id in the URL. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translation set Accept-Language. Possible include values: &#x60;&#x60;&#x60;tenant, parent&#x60;&#x60;&#x60;
     * @param {Number} id Id of node type to fetch
     * @param {Object} opts Optional parameters
     * @param {String} opts.include Comma separated list of objects to include in response
     * @param {String} opts.acceptLanguage The client&#39;s accepted languages. One or several (e.g. fr,de,en)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NodeTypeResponse} and HTTP response
     */
    this.getNodeTypeByIdWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getNodeTypeById");
      }


      var pathParams = {
        'id': id
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
      var returnType = NodeTypeResponse;

      return this.apiClient.callApi(
        '/node/types/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a single node type
     * Get a specific node type identified by the id in the URL. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translation set Accept-Language. Possible include values: &#x60;&#x60;&#x60;tenant, parent&#x60;&#x60;&#x60;
     * @param {Number} id Id of node type to fetch
     * @param {Object} opts Optional parameters
     * @param {String} opts.include Comma separated list of objects to include in response
     * @param {String} opts.acceptLanguage The client&#39;s accepted languages. One or several (e.g. fr,de,en)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NodeTypeResponse}
     */
    this.getNodeTypeById = function(id, opts) {
      return this.getNodeTypeByIdWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a range of instrumentation types
     * Returns a list of all node types available in your scope. You can apply the query parameters listed below to get a filtered list. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translation set Accept-Language. Possible include values: &#x60;&#x60;&#x60;tenant, parent&#x60;&#x60;&#x60;
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number to load
     * @param {Number} opts.perPage Number of items to load per page
     * @param {String} opts.include Comma separated list of objects to include in response
     * @param {String} opts.name searches node types with given name
     * @param {String} opts.code Filter accepts &#x60;*&#x60; as wildcard
     * @param {String} opts.tenantId One or multiple ids (comma list). Expected id format is integer
     * @param {String} opts.parentId One or multiple ids (comma list). \&quot;null\&quot; to retrieve all objects without parent, \&quot;!null\&quot; for all objects with parent.
     * @param {String} opts.orderBy Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60;
     * @param {String} opts.acceptLanguage The client&#39;s accepted languages. One or several (e.g. fr,de,en)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NodeTypes} and HTTP response
     */
    this.getNodeTypesWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
        'include': opts['include'],
        'name': opts['name'],
        'code': opts['code'],
        'tenant_id': opts['tenantId'],
        'parent_id': opts['parentId'],
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
      var returnType = NodeTypes;

      return this.apiClient.callApi(
        '/node/types', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a range of instrumentation types
     * Returns a list of all node types available in your scope. You can apply the query parameters listed below to get a filtered list. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translation set Accept-Language. Possible include values: &#x60;&#x60;&#x60;tenant, parent&#x60;&#x60;&#x60;
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number to load
     * @param {Number} opts.perPage Number of items to load per page
     * @param {String} opts.include Comma separated list of objects to include in response
     * @param {String} opts.name searches node types with given name
     * @param {String} opts.code Filter accepts &#x60;*&#x60; as wildcard
     * @param {String} opts.tenantId One or multiple ids (comma list). Expected id format is integer
     * @param {String} opts.parentId One or multiple ids (comma list). \&quot;null\&quot; to retrieve all objects without parent, \&quot;!null\&quot; for all objects with parent.
     * @param {String} opts.orderBy Order result by attribute value, accepts &#x60;id&#x60;, &#x60;created_at&#x60; or &#x60;updated_at&#x60;. Add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;id&#x60;
     * @param {String} opts.acceptLanguage The client&#39;s accepted languages. One or several (e.g. fr,de,en)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NodeTypes}
     */
    this.getNodeTypes = function(opts) {
      return this.getNodeTypesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get all possible types of the specified node
     * Returns a list of all possible node types for the specified node. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translation set Accept-Language.
     * @param {Number} nodeId Id of the node
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number to load
     * @param {Number} opts.perPage Number of items to load per page
     * @param {String} opts.tenantId One or multiple ids (comma list). Expected id format is integer
     * @param {String} opts.name Filter accepts &#x60;*&#x60; as wildcard
     * @param {String} opts.code Filter accepts &#x60;*&#x60; as wildcard
     * @param {String} opts.acceptLanguage The client&#39;s accepted languages. One or several (e.g. fr,de,en)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NodeTypes} and HTTP response
     */
    this.getNodeTypesOptionsWithHttpInfo = function(nodeId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'nodeId' is set
      if (nodeId === undefined || nodeId === null) {
        throw new Error("Missing the required parameter 'nodeId' when calling getNodeTypesOptions");
      }


      var pathParams = {
        'node_id': nodeId
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
      var returnType = NodeTypes;

      return this.apiClient.callApi(
        '/nodes/{node_id}/type-options', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get all possible types of the specified node
     * Returns a list of all possible node types for the specified node. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To get a translation set Accept-Language.
     * @param {Number} nodeId Id of the node
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number to load
     * @param {Number} opts.perPage Number of items to load per page
     * @param {String} opts.tenantId One or multiple ids (comma list). Expected id format is integer
     * @param {String} opts.name Filter accepts &#x60;*&#x60; as wildcard
     * @param {String} opts.code Filter accepts &#x60;*&#x60; as wildcard
     * @param {String} opts.acceptLanguage The client&#39;s accepted languages. One or several (e.g. fr,de,en)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NodeTypes}
     */
    this.getNodeTypesOptions = function(nodeId, opts) {
      return this.getNodeTypesOptionsWithHttpInfo(nodeId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a node type
     * Update accessible parameters of the requested resource. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To add a translation set Content-Language.
     * @param {Number} id Id of the node type to update
     * @param {module:model/NodeTypeRequest} body Parameters that shall be updated.
     * @param {Object} opts Optional parameters
     * @param {String} opts.contentLanguage language of the content
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.updateNodeTypeWithHttpInfo = function(id, body, opts) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateNodeType");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateNodeType");
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
        '/node/types/{id}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a node type
     * Update accessible parameters of the requested resource. Parameters supporting translation: &#x60;&#x60;&#x60;name, description&#x60;&#x60;&#x60;. To add a translation set Content-Language.
     * @param {Number} id Id of the node type to update
     * @param {module:model/NodeTypeRequest} body Parameters that shall be updated.
     * @param {Object} opts Optional parameters
     * @param {String} opts.contentLanguage language of the content
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.updateNodeType = function(id, body, opts) {
      return this.updateNodeTypeWithHttpInfo(id, body, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
