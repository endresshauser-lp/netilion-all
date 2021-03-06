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
    define(['ApiClient', 'model/AssetKeyValuesResponse', 'model/AssetValuesResponse', 'model/ErrorResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AssetKeyValuesResponse'), require('../model/AssetValuesResponse'), require('../model/ErrorResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.NetilionApiDocumentation) {
      root.NetilionApiDocumentation = {};
    }
    root.NetilionApiDocumentation.InstrumentationValuesApi = factory(root.NetilionApiDocumentation.ApiClient, root.NetilionApiDocumentation.AssetKeyValuesResponse, root.NetilionApiDocumentation.AssetValuesResponse, root.NetilionApiDocumentation.ErrorResponse);
  }
}(this, function(ApiClient, AssetKeyValuesResponse, AssetValuesResponse, ErrorResponse) {
  'use strict';

  /**
   * InstrumentationValues service.
   * @module api/InstrumentationValuesApi
   * @version 01.00.00
   */

  /**
   * Constructs a new InstrumentationValuesApi. 
   * @alias module:api/InstrumentationValuesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get latest values for the instrumentation.
     * Returns a collection of the latest values for all keys of the instrumentation. Possible include values: &#x60;&#x60;&#x60;unit, asset&#x60;&#x60;&#x60;
     * @param {Number} instrumentationId The resource defined in the URL
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number to load
     * @param {Number} opts.perPage Number of items to load per page
     * @param {String} opts.include Comma separated list of objects to include in response
     * @param {String} opts.key only the values of the specified keys will be returned. If no key is specified all keys of the asset with its latest values will be received. Multiple values can be specified in a comma seperated list.
     * @param {String} opts.keyUnitId value of the provided key will be returned in the specified unit. If no key_unit is defined the last written unit will be returned. Accepted format is &#x60;key[unit_id]&#x60;. Multiple values can be provided in a comma seperated list.
     * @param {String} opts.group Group of the asset value.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AssetValuesResponse} and HTTP response
     */
    this.getInstrumentationValuesWithHttpInfo = function(instrumentationId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'instrumentationId' is set
      if (instrumentationId === undefined || instrumentationId === null) {
        throw new Error("Missing the required parameter 'instrumentationId' when calling getInstrumentationValues");
      }


      var pathParams = {
        'instrumentation_id': instrumentationId
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
        'include': opts['include'],
        'key': opts['key'],
        'key_unit_id': opts['keyUnitId'],
        'group': opts['group'],
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
      var returnType = AssetValuesResponse;

      return this.apiClient.callApi(
        '/instrumentations/{instrumentation_id}/values', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get latest values for the instrumentation.
     * Returns a collection of the latest values for all keys of the instrumentation. Possible include values: &#x60;&#x60;&#x60;unit, asset&#x60;&#x60;&#x60;
     * @param {Number} instrumentationId The resource defined in the URL
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number to load
     * @param {Number} opts.perPage Number of items to load per page
     * @param {String} opts.include Comma separated list of objects to include in response
     * @param {String} opts.key only the values of the specified keys will be returned. If no key is specified all keys of the asset with its latest values will be received. Multiple values can be specified in a comma seperated list.
     * @param {String} opts.keyUnitId value of the provided key will be returned in the specified unit. If no key_unit is defined the last written unit will be returned. Accepted format is &#x60;key[unit_id]&#x60;. Multiple values can be provided in a comma seperated list.
     * @param {String} opts.group Group of the asset value.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AssetValuesResponse}
     */
    this.getInstrumentationValues = function(instrumentationId, opts) {
      return this.getInstrumentationValuesWithHttpInfo(instrumentationId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get instrumentation values for a specific key.
     * Returns a collection of the history values of an values for the specified key. For a aggregated result of the values the filter parameters aggregation and interval are mandatory. Receiving the result in a specific unit please use the filter parameter unit. The allowed units can be found in the intro section. With the filter parameters from to it is possible to receive the history of a defined time period. Possible include values: &#x60;&#x60;&#x60;unit&#x60;&#x60;&#x60;
     * @param {Number} instrumentationId The resource defined in the URL
     * @param {String} key key for the instrumentation values
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number to load
     * @param {Number} opts.perPage Number of items to load per page, default value is 500, maximum is 1000
     * @param {String} opts.include Comma separated list of objects to include in response
     * @param {Date} opts.from Start date filter for history values. Expected date format is YYYY-MM-DDThh:mm:ss
     * @param {Date} opts.to End date for history values. Expected date format is YYYY-MM-DDThh:mm:ss
     * @param {Number} opts.unitId Id of the unit in which the values are to be returned.
     * @param {String} opts.aggregation Supported aggregation methods are &#x60;mean, min, max, sum, stddev&#x60;. This value is mandatory if interval is defined.
     * @param {String} opts.interval Interval which is used for the aggregation. The value is mandatory if aggregation is defined. Supported intervals are number of &#x60;s, m, h, d, w&#x60;. Example &#x60;3h&#x60;.
     * @param {String} opts.orderBy Order result by attribute value, accepts &#x60;timestamp&#x60;, add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;timestamp&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AssetKeyValuesResponse} and HTTP response
     */
    this.getInstrumentationValuesForKeyWithHttpInfo = function(instrumentationId, key, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'instrumentationId' is set
      if (instrumentationId === undefined || instrumentationId === null) {
        throw new Error("Missing the required parameter 'instrumentationId' when calling getInstrumentationValuesForKey");
      }

      // verify the required parameter 'key' is set
      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling getInstrumentationValuesForKey");
      }


      var pathParams = {
        'instrumentation_id': instrumentationId,
        'key': key
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
        'include': opts['include'],
        'from': opts['from'],
        'to': opts['to'],
        'unit_id': opts['unitId'],
        'aggregation': opts['aggregation'],
        'interval': opts['interval'],
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
      var returnType = AssetKeyValuesResponse;

      return this.apiClient.callApi(
        '/instrumentations/{instrumentation_id}/values/{key}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get instrumentation values for a specific key.
     * Returns a collection of the history values of an values for the specified key. For a aggregated result of the values the filter parameters aggregation and interval are mandatory. Receiving the result in a specific unit please use the filter parameter unit. The allowed units can be found in the intro section. With the filter parameters from to it is possible to receive the history of a defined time period. Possible include values: &#x60;&#x60;&#x60;unit&#x60;&#x60;&#x60;
     * @param {Number} instrumentationId The resource defined in the URL
     * @param {String} key key for the instrumentation values
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number to load
     * @param {Number} opts.perPage Number of items to load per page, default value is 500, maximum is 1000
     * @param {String} opts.include Comma separated list of objects to include in response
     * @param {Date} opts.from Start date filter for history values. Expected date format is YYYY-MM-DDThh:mm:ss
     * @param {Date} opts.to End date for history values. Expected date format is YYYY-MM-DDThh:mm:ss
     * @param {Number} opts.unitId Id of the unit in which the values are to be returned.
     * @param {String} opts.aggregation Supported aggregation methods are &#x60;mean, min, max, sum, stddev&#x60;. This value is mandatory if interval is defined.
     * @param {String} opts.interval Interval which is used for the aggregation. The value is mandatory if aggregation is defined. Supported intervals are number of &#x60;s, m, h, d, w&#x60;. Example &#x60;3h&#x60;.
     * @param {String} opts.orderBy Order result by attribute value, accepts &#x60;timestamp&#x60;, add &#x60;-&#x60; as a prefix for descending order. Default value is &#x60;timestamp&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AssetKeyValuesResponse}
     */
    this.getInstrumentationValuesForKey = function(instrumentationId, key, opts) {
      return this.getInstrumentationValuesForKeyWithHttpInfo(instrumentationId, key, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
