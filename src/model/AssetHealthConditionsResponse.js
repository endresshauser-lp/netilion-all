/**
 * Netilion API Documentation
 * Welcome to the Netilion API Documentation, which provides interactive access and documentation to our REST API. Please visit our developer portal for further instructions and information: https://developer.netilion.endress.com/ 
 *
 * OpenAPI spec version: 01.00.00
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import AssetHealthConditionResponse from './AssetHealthConditionResponse';
import Pagination from './Pagination';

/**
* The AssetHealthConditionsResponse model module.
* @module model/AssetHealthConditionsResponse
* @version 01.00.00
*/
export default class AssetHealthConditionsResponse {
    /**
    * Constructs a new <code>AssetHealthConditionsResponse</code>.
    * @alias module:model/AssetHealthConditionsResponse
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>AssetHealthConditionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/AssetHealthConditionsResponse} obj Optional instance to populate.
    * @return {module:model/AssetHealthConditionsResponse} The populated <code>AssetHealthConditionsResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AssetHealthConditionsResponse();
                        
            
            if (data.hasOwnProperty('health_conditions')) {
                obj['health_conditions'] = ApiClient.convertToType(data['health_conditions'], [AssetHealthConditionResponse]);
            }
            if (data.hasOwnProperty('pagination')) {
                obj['pagination'] = Pagination.constructFromObject(data['pagination']);
            }
        }
        return obj;
    }

    /**
    * @member {Array.<module:model/AssetHealthConditionResponse>} health_conditions
    */
    health_conditions = undefined;
    /**
    * @member {module:model/Pagination} pagination
    */
    pagination = undefined;




}