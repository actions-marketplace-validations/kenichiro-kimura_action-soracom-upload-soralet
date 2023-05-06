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

/**
* 日本のオペレーターのみご利用いただけます。
*/
export class ShippingOptionOfNekopos {
    /**
    * ネコポスの使用を許可する場合は true を指定します。
    */
    'allowNekopos'?: boolean;
    /**
    * 運送会社
    */
    'shipmentCompany'?: ShippingOptionOfNekopos.ShipmentCompanyEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "allowNekopos",
            "baseName": "allowNekopos",
            "type": "boolean"
        },
        {
            "name": "shipmentCompany",
            "baseName": "shipmentCompany",
            "type": "ShippingOptionOfNekopos.ShipmentCompanyEnum"
        }    ];

    static getAttributeTypeMap() {
        return ShippingOptionOfNekopos.attributeTypeMap;
    }
}

export namespace ShippingOptionOfNekopos {
    export enum ShipmentCompanyEnum {
        YamatoTransport = <any> 'yamato_transport'
    }
}
