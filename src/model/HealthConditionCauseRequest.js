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
import HealthConditionCauseBase from './HealthConditionCauseBase';

/**
* The HealthConditionCauseRequest model module.
* @module model/HealthConditionCauseRequest
* @version 01.00.00
*/
export default class HealthConditionCauseRequest {
    /**
    * Constructs a new <code>HealthConditionCauseRequest</code>.
    * @alias module:model/HealthConditionCauseRequest
    * @class
    * @extends module:model/HealthConditionCauseBase
    * @param code {} code of the cause
    * @param description {} description of the cause
    */

    constructor(code, description) {
        HealthConditionCauseBase.call(this, code, description);
        
        
    }

    /**
    * Constructs a <code>HealthConditionCauseRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/HealthConditionCauseRequest} obj Optional instance to populate.
    * @return {module:model/HealthConditionCauseRequest} The populated <code>HealthConditionCauseRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HealthConditionCauseRequest();
            
            HealthConditionCauseBase.constructFromObject(data, obj);
            
        }
        return obj;
    }





}