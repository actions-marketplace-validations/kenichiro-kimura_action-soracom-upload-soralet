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

export class CellIdentifier {
    'cid'?: string;
    'eci'?: string;
    'ecid'?: string;
    /**
    * リクエストとそれに対する結果を結びつけるための識別子。オプショナルです。
    */
    'identifier'?: string;
    'lac'?: string;
    'mcc'?: string;
    'mnc'?: string;
    'tac'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cid",
            "baseName": "cid",
            "type": "string"
        },
        {
            "name": "eci",
            "baseName": "eci",
            "type": "string"
        },
        {
            "name": "ecid",
            "baseName": "ecid",
            "type": "string"
        },
        {
            "name": "identifier",
            "baseName": "identifier",
            "type": "string"
        },
        {
            "name": "lac",
            "baseName": "lac",
            "type": "string"
        },
        {
            "name": "mcc",
            "baseName": "mcc",
            "type": "string"
        },
        {
            "name": "mnc",
            "baseName": "mnc",
            "type": "string"
        },
        {
            "name": "tac",
            "baseName": "tac",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CellIdentifier.attributeTypeMap;
    }
}

