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

export class LagoonRegistrationRequest {
    'plan'?: LagoonRegistrationRequest.PlanEnum;
    /**
    * This password is used by the initial user\'s login.
    */
    'userPassword'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "plan",
            "baseName": "plan",
            "type": "LagoonRegistrationRequest.PlanEnum"
        },
        {
            "name": "userPassword",
            "baseName": "userPassword",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return LagoonRegistrationRequest.attributeTypeMap;
    }
}

export namespace LagoonRegistrationRequest {
    export enum PlanEnum {
        Free = <any> 'free',
        Maker = <any> 'maker',
        Pro = <any> 'pro'
    }
}
