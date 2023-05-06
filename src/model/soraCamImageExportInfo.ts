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

export class SoraCamImageExportInfo {
    /**
    * ソラカメ対応カメラのデバイス ID
    */
    'deviceId'?: string;
    /**
    * URL の有効期限 (UNIX 時間 (ミリ秒))。`status` が `completed` の場合のみ含まれます。
    */
    'expiryTime'?: number;
    /**
    * エクスポート ID。[`SoraCam:exportSoraCamDeviceRecordedImage API`](/ja-jp/tools/api/reference/#/SoraCam/exportSoraCamDeviceRecordedImage) で取得したエクスポート ID を、[`SoraCam:getSoraCamDeviceExportedImage API`](/ja-jp/tools/api/reference/#/SoraCam/getSoraCamDeviceExportedImage) で指定すると、jpg ファイルをダウンロードするための URL を取得できます。 
    */
    'exportId'?: string;
    /**
    * [`SoraCam:exportSoraCamDeviceRecordedImage API`](/ja-jp/tools/api/reference/#/SoraCam/exportSoraCamDeviceRecordedImage) を呼び出したオペレーターの ID 
    */
    'operatorId'?: string;
    /**
    * [`SoraCam:exportSoraCamDeviceRecordedImage API`](/ja-jp/tools/api/reference/#/SoraCam/exportSoraCamDeviceRecordedImage) によるエクスポートのリクエストを SORACOM プラットフォームが受け付けた日時 (UNIX 時間 (ミリ秒)) 
    */
    'requestedTime'?: number;
    /**
    * エクスポート処理の現在の状況。  - `initializing`: 初期状態 - `processing`: 処理中 - `completed`: エクスポート完了 - `retrying`: エクスポート再実行中 - `failed`: エクスポート失敗 - `limitExceeded`: 動画のエクスポート可能時間の上限を超えたためエクスポート不可 - `expired`: URL の有効期限切れ 
    */
    'status'?: SoraCamImageExportInfo.StatusEnum;
    /**
    * エクスポートされた jpg ファイルをダウンロードするための URL。`status` が `completed` の場合のみ含まれます。
    */
    'url'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "deviceId",
            "baseName": "deviceId",
            "type": "string"
        },
        {
            "name": "expiryTime",
            "baseName": "expiryTime",
            "type": "number"
        },
        {
            "name": "exportId",
            "baseName": "exportId",
            "type": "string"
        },
        {
            "name": "operatorId",
            "baseName": "operatorId",
            "type": "string"
        },
        {
            "name": "requestedTime",
            "baseName": "requestedTime",
            "type": "number"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "SoraCamImageExportInfo.StatusEnum"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SoraCamImageExportInfo.attributeTypeMap;
    }
}

export namespace SoraCamImageExportInfo {
    export enum StatusEnum {
        Initializing = <any> 'initializing',
        Processing = <any> 'processing',
        Completed = <any> 'completed',
        Retrying = <any> 'retrying',
        Failed = <any> 'failed',
        LimitExceeded = <any> 'limitExceeded',
        Expired = <any> 'expired'
    }
}