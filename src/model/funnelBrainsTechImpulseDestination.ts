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

export class FunnelBrainsTechImpulseDestination {
    'provider'?: FunnelBrainsTechImpulseDestination.ProviderEnum;
    'resourceUrl'?: string;
    'service'?: FunnelBrainsTechImpulseDestination.ServiceEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "provider",
            "baseName": "provider",
            "type": "FunnelBrainsTechImpulseDestination.ProviderEnum"
        },
        {
            "name": "resourceUrl",
            "baseName": "resourceUrl",
            "type": "string"
        },
        {
            "name": "service",
            "baseName": "service",
            "type": "FunnelBrainsTechImpulseDestination.ServiceEnum"
        }    ];

    static getAttributeTypeMap() {
        return FunnelBrainsTechImpulseDestination.attributeTypeMap;
    }
}

export namespace FunnelBrainsTechImpulseDestination {
    export enum ProviderEnum {
        BrainsTech = <any> 'brains-tech'
    }
    export enum ServiceEnum {
        Impulse = <any> 'impulse'
    }
}
