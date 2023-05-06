/**
 * SORACOM API
 * SORACOM API v1
 *
 * The version of the OpenAPI document: 20230427-035008
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class CreateOrUpdateRoleRequest {
    'description'?: string;
    /**
    * Permission の JSON
    */
    'permission': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "permission",
            "baseName": "permission",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CreateOrUpdateRoleRequest.attributeTypeMap;
    }
}

