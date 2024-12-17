import type { REQUEST_STATUS_ENUM } from "../../enum/service/Request";

interface RequestCard {
    title: string;
    reward_price: number;
    currency: "USD" | "KRW" | "JPY" | "";
    address: string;
    start_date: Date;
    request_status: REQUEST_STATUS_ENUM;
    logo_image: string;
}

interface RequestData extends RequestCard {
    consumer_id: number;
    head_count: number;
    content: string;
    are_needed?: string[];
    are_required?: string[];
    end_date?: Date;
    address_coordinate: {
        type: "Point";
        coordinates: [lat: number, lng: number];
    };
    provide_food: boolean;
    provide_trans_exp: boolean;
    prep_material: string[];
    start_time: string;
    end_time: string;
    created_at?: Date;
    updated_at?: Date;
    corp_id?: number;
    orgn_id?: number;
}

interface CorporationCard {
    corp_name: string;
    nationality: string;
    ceo_name?: string;
    corp_address?: string;
    biz_started_at?: string;
    biz_type?: string;
    logo_image?: string;
    site_url?: string;
    isMypage?: boolean;
    corp_domain?: string;
    phone_number?: string;
    corp_num?: number;
    biz_num?: number;
    corp_status?: string;
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

export interface ResGetRequest {
    request: RequestData;
    corp_card: CorporationCard;
    past_requests: RequestCard[];
}

// Model attributes

export interface ReqUpdateRequestStatusContract {
    request_id: number;
}

export interface ResUpdateRequestStatusContract {}

export interface ReqUpdateRequestProviderIds {
    chatroom_id: string;
}

export interface ResUpdateRequestProviderIds {}
