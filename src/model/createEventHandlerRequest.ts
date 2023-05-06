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
import { ActionConfig } from './actionConfig';
import { RuleConfig } from './ruleConfig';

export class CreateEventHandlerRequest {
    'actionConfigList': Array<ActionConfig>;
    'description'?: string;
    'name'?: string;
    'ruleConfig': RuleConfig;
    'status': CreateEventHandlerRequest.StatusEnum;
    'targetGroupId'?: string;
    'targetImsi'?: string;
    'targetOperatorId'?: string;
    'targetSimId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "actionConfigList",
            "baseName": "actionConfigList",
            "type": "Array<ActionConfig>"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "ruleConfig",
            "baseName": "ruleConfig",
            "type": "RuleConfig"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "CreateEventHandlerRequest.StatusEnum"
        },
        {
            "name": "targetGroupId",
            "baseName": "targetGroupId",
            "type": "string"
        },
        {
            "name": "targetImsi",
            "baseName": "targetImsi",
            "type": "string"
        },
        {
            "name": "targetOperatorId",
            "baseName": "targetOperatorId",
            "type": "string"
        },
        {
            "name": "targetSimId",
            "baseName": "targetSimId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CreateEventHandlerRequest.attributeTypeMap;
    }
}

export namespace CreateEventHandlerRequest {
    export enum StatusEnum {
        Inactive = <any> 'inactive',
        Active = <any> 'active'
    }
}