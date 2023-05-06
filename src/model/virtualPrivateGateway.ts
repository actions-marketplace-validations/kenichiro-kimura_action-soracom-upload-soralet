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
import { Placement } from './placement';

export class VirtualPrivateGateway {
    'allowedOperators'?: object;
    'createdTime'?: number;
    /**
    * デバイスサブネット IP アドレスレンジ
    */
    'deviceSubnetCidrRange'?: string;
    /**
    * 固定グローバル IP アドレスオプション  - `true`: 有効 - `false`: 無効 
    */
    'fixedIpAddressesEnabled'?: boolean;
    'gateVxlanId'?: number;
    'implicitTerminationProtected'?: boolean;
    'junctionEnabled'?: boolean;
    'lastModifiedTime'?: number;
    'operatorId'?: string;
    'placement'?: Placement;
    'size'?: string;
    'status'?: VirtualPrivateGateway.StatusEnum;
    /**
    * An object which always contains at least one property \"name\" with a string value. If you give a subscriber/SIM a name, the name will be returned as the value of the \"name\" property. If the subscriber/SIM does not have a name, an empty string \"\" is returned. In addition, if you create any custom tags for the subscriber/SIM, each custom tag will appear as additional properties in the object.
    */
    'tags'?: { [key: string]: string; };
    /**
    * VPG のタイプ  - `14` : Type-E - `15` : Type-F 
    */
    'type'?: VirtualPrivateGateway.TypeEnum;
    /**
    * デバイスサブネット IP アドレスレンジ
    */
    'ueSubnetCidrRange'?: string;
    /**
    * インターネットゲートウェイ  - `true`: 有効 - `false`: 無効 
    */
    'useInternetGateway'?: boolean;
    'virtualInterfaces'?: { [key: string]: string; };
    'vpcPeeringConnections'?: { [key: string]: string; };
    /**
    * ID
    */
    'vpgId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "allowedOperators",
            "baseName": "allowedOperators",
            "type": "object"
        },
        {
            "name": "createdTime",
            "baseName": "createdTime",
            "type": "number"
        },
        {
            "name": "deviceSubnetCidrRange",
            "baseName": "deviceSubnetCidrRange",
            "type": "string"
        },
        {
            "name": "fixedIpAddressesEnabled",
            "baseName": "fixedIpAddressesEnabled",
            "type": "boolean"
        },
        {
            "name": "gateVxlanId",
            "baseName": "gateVxlanId",
            "type": "number"
        },
        {
            "name": "implicitTerminationProtected",
            "baseName": "implicitTerminationProtected",
            "type": "boolean"
        },
        {
            "name": "junctionEnabled",
            "baseName": "junctionEnabled",
            "type": "boolean"
        },
        {
            "name": "lastModifiedTime",
            "baseName": "lastModifiedTime",
            "type": "number"
        },
        {
            "name": "operatorId",
            "baseName": "operatorId",
            "type": "string"
        },
        {
            "name": "placement",
            "baseName": "placement",
            "type": "Placement"
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "VirtualPrivateGateway.StatusEnum"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "VirtualPrivateGateway.TypeEnum"
        },
        {
            "name": "ueSubnetCidrRange",
            "baseName": "ueSubnetCidrRange",
            "type": "string"
        },
        {
            "name": "useInternetGateway",
            "baseName": "useInternetGateway",
            "type": "boolean"
        },
        {
            "name": "virtualInterfaces",
            "baseName": "virtualInterfaces",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "vpcPeeringConnections",
            "baseName": "vpcPeeringConnections",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "vpgId",
            "baseName": "vpgId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return VirtualPrivateGateway.attributeTypeMap;
    }
}

export namespace VirtualPrivateGateway {
    export enum StatusEnum {
        Running = <any> 'running'
    }
    export enum TypeEnum {
        NUMBER_12 = <any> 12,
        NUMBER_13 = <any> 13,
        NUMBER_14 = <any> 14,
        NUMBER_15 = <any> 15
    }
}
