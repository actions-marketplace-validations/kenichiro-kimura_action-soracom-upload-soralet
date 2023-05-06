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

export class LocationRegistrationStatusForNetwork {
    /**
    * 最後にネットワーク登録が成功したときのタイムスタンプ（ミリ秒単位の Unix 時間）
    */
    'lastModifiedTime'?: number;
    /**
    * ローミング先の PLMN ID
    */
    'vplmn'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "lastModifiedTime",
            "baseName": "lastModifiedTime",
            "type": "number"
        },
        {
            "name": "vplmn",
            "baseName": "vplmn",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return LocationRegistrationStatusForNetwork.attributeTypeMap;
    }
}
