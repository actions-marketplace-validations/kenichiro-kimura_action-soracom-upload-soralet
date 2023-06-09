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

export class FunnelFusicMockmockDatarecorderDestination {
    'provider'?: FunnelFusicMockmockDatarecorderDestination.ProviderEnum;
    'resourceUrl'?: string;
    'service'?: FunnelFusicMockmockDatarecorderDestination.ServiceEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "provider",
            "baseName": "provider",
            "type": "FunnelFusicMockmockDatarecorderDestination.ProviderEnum"
        },
        {
            "name": "resourceUrl",
            "baseName": "resourceUrl",
            "type": "string"
        },
        {
            "name": "service",
            "baseName": "service",
            "type": "FunnelFusicMockmockDatarecorderDestination.ServiceEnum"
        }    ];

    static getAttributeTypeMap() {
        return FunnelFusicMockmockDatarecorderDestination.attributeTypeMap;
    }
}

export namespace FunnelFusicMockmockDatarecorderDestination {
    export enum ProviderEnum {
        Fusic = <any> 'fusic'
    }
    export enum ServiceEnum {
        MockmockDatarecorder = <any> 'mockmock-datarecorder'
    }
}
