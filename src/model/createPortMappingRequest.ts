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
import { PortMappingDestination } from './portMappingDestination';
import { PortMappingSource } from './portMappingSource';

export class CreatePortMappingRequest {
    'destination': PortMappingDestination;
    /**
    * リモートアクセスを有効にする時間 (秒単位)
    */
    'duration'?: number;
    'source'?: PortMappingSource;
    /**
    * リモートアクセスに TLS を使用するかどうか
    */
    'tlsRequired'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "destination",
            "baseName": "destination",
            "type": "PortMappingDestination"
        },
        {
            "name": "duration",
            "baseName": "duration",
            "type": "number"
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "PortMappingSource"
        },
        {
            "name": "tlsRequired",
            "baseName": "tlsRequired",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return CreatePortMappingRequest.attributeTypeMap;
    }
}
