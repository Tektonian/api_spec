import type { REQUEST_STATUS_ENUM } from "../../enum/service/Request";

interface RequestData {
    request_id?: number;
    consumer_id: number;
    title: string;
    subtitle: object;
    head_count: number;
    reward_price: number;
    currency: string;
    content: string;
    are_needed?: object;
    are_required?: object;
    start_date: Date;
    end_date?: Date;
    address: string;
    address_coordinate: {
        type: "Point";
        coordinates: [lat: number, lng: number];
    };
    provide_food: boolean;
    provide_trans_exp: boolean;
    prep_material: object;
    request_status: REQUEST_STATUS_ENUM;
    start_time: string;
    end_time: string;
    created_at?: Date;
    updated_at?: Date;
    corp_id?: number;
    orgn_id?: number;
}

// Model attribute
export interface ReqCreateRequest {
    role: string;
    data: RequestData;

}

export interface ResCreateRequest {
    request_id: number;
}

export interface ReqGetRequest {
    request_id: number;
}

// Model attributes
export interface ResGetRequest {
    data: RequestData;
    status: string;
}

export interface ReqUpdateRequestStatus {
    request_id: number;
    update: REQUEST_STATUS_ENUM;
}

export interface ResUpdateRequestStatus {
    status: string;
}