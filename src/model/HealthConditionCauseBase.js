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

/**
* The HealthConditionCauseBase model module.
* @module model/HealthConditionCauseBase
* @version 01.00.00
*/
export default class HealthConditionCauseBase {
    /**
    * Constructs a new <code>HealthConditionCauseBase</code>.
    * @alias module:model/HealthConditionCauseBase
    * @class
    * @param code {String} code of the cause
    * @param description {String} description of the cause
    */

    constructor(code, description) {
        
        
        this['code'] = code;
        this['description'] = description;
        
    }

    /**
    * Constructs a <code>HealthConditionCauseBase</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/HealthConditionCauseBase} obj Optional instance to populate.
    * @return {module:model/HealthConditionCauseBase} The populated <code>HealthConditionCauseBase</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HealthConditionCauseBase();
                        
            
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }

    /**
    * code of the cause
    * @member {String} code
    */
    code = undefined;
    /**
    * description of the cause
    * @member {String} description
    */
    description = undefined;




}