
interface RequestData {
    request_id?: number;
    consumer_id?: number;
    title: string;
    subtitle: object;
    head_count: number;
    reward_price: number;
    currency: string;
    content: string;
    are_needed?: object;
    are_required?: object;
    start_date: string;
    end_date: string;
    address: string;
    address_coordinate: any;
    provide_food?: any;
    provide_trans_exp?: any;
    prep_material?: object;
    request_status: number;
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
export interface ResGetRequest extends RequestData {};

export interface ReqUpdateRequestStatus {
    request_id: number;
    status: number;
}

export interface ResUpdateRequestStatus {
    response: string;
}