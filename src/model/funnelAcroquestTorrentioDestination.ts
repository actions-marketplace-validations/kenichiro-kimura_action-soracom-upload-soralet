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

export class FunnelAcroquestTorrentioDestination {
    'endpointId'?: string;
    'provider'?: FunnelAcroquestTorrentioDestination.ProviderEnum;
    'resourceUrl'?: string;
    'service'?: FunnelAcroquestTorrentioDestination.ServiceEnum;
    'tenantId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "endpointId",
            "baseName": "endpointId",
            "type": "string"
        },
        {
            "name": "provider",
            "baseName": "provider",
            "type": "FunnelAcroquestTorrentioDestination.ProviderEnum"
        },
        {
            "name": "resourceUrl",
            "baseName": "resourceUrl",
            "type": "string"
        },
        {
            "name": "service",
            "baseName": "service",
            "type": "FunnelAcroquestTorrentioDestination.ServiceEnum"
        },
        {
            "name": "tenantId",
            "baseName": "tenantId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return FunnelAcroquestTorrentioDestination.attributeTypeMap;
    }
}

export namespace FunnelAcroquestTorrentioDestination {
    export enum ProviderEnum {
        Acroquest = <any> 'acroquest'
    }
    export enum ServiceEnum {
        Torrentio = <any> 'torrentio'
    }
}
