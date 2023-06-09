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

export class AvailableLongTermDiscountModel {
    /**
    * 契約月数
    */
    'contractTermMonth'?: number = 12;
    /**
    * 通貨
    */
    'currency'?: AvailableLongTermDiscountModel.CurrencyEnum;
    /**
    * 税込単価
    */
    'taxIncludedUnitPrice'?: number;
    /**
    * 単価
    */
    'unitPrice'?: number;
    /**
    * お支払い方法
    */
    'volumeDiscountPaymentType'?: AvailableLongTermDiscountModel.VolumeDiscountPaymentTypeEnum;
    /**
    * 料金計算方法
    */
    'volumeDiscountType'?: AvailableLongTermDiscountModel.VolumeDiscountTypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "contractTermMonth",
            "baseName": "contractTermMonth",
            "type": "number"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "AvailableLongTermDiscountModel.CurrencyEnum"
        },
        {
            "name": "taxIncludedUnitPrice",
            "baseName": "taxIncludedUnitPrice",
            "type": "number"
        },
        {
            "name": "unitPrice",
            "baseName": "unitPrice",
            "type": "number"
        },
        {
            "name": "volumeDiscountPaymentType",
            "baseName": "volumeDiscountPaymentType",
            "type": "AvailableLongTermDiscountModel.VolumeDiscountPaymentTypeEnum"
        },
        {
            "name": "volumeDiscountType",
            "baseName": "volumeDiscountType",
            "type": "AvailableLongTermDiscountModel.VolumeDiscountTypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return AvailableLongTermDiscountModel.attributeTypeMap;
    }
}

export namespace AvailableLongTermDiscountModel {
    export enum CurrencyEnum {
        Jpy = <any> 'JPY',
        Usd = <any> 'USD',
        Eur = <any> 'EUR'
    }
    export enum VolumeDiscountPaymentTypeEnum {
        Monthly = <any> 'MONTHLY',
        Prepayment = <any> 'PREPAYMENT'
    }
    export enum VolumeDiscountTypeEnum {
        BasicChargeV2 = <any> 'SORACOM_AIR_BASIC_CHARGE_V2',
        BasicCharge = <any> 'SORACOM_AIR_BASIC_CHARGE',
        MonthlyFixedBasicCharge = <any> 'SORACOM_AIR_MONTHLY_FIXED_BASIC_CHARGE'
    }
}
