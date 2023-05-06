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
import { SoracomFunkStats } from './soracomFunkStats';

export class FunkStatsResponse {
    'funkStatsMap'?: { [key: string]: SoracomFunkStats; };
    'unixtime'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "funkStatsMap",
            "baseName": "funkStatsMap",
            "type": "{ [key: string]: SoracomFunkStats; }"
        },
        {
            "name": "unixtime",
            "baseName": "unixtime",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return FunkStatsResponse.attributeTypeMap;
    }
}

