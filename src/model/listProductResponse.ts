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
import { ProductModel } from './productModel';
import { ShippingCostModel } from './shippingCostModel';

export class ListProductResponse {
    'productList'?: Array<ProductModel>;
    'shippingCostList'?: Array<ShippingCostModel>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "productList",
            "baseName": "productList",
            "type": "Array<ProductModel>"
        },
        {
            "name": "shippingCostList",
            "baseName": "shippingCostList",
            "type": "Array<ShippingCostModel>"
        }    ];

    static getAttributeTypeMap() {
        return ListProductResponse.attributeTypeMap;
    }
}

