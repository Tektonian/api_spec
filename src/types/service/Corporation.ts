import { Tspec } from "tspec"

interface Corporation {
    corp_id: number;
    corp_name: string;
    nationality: string;
    corp_domain?: string;
    ceo_name?: string;
    corp_address?: string;
    phone_number?: string;
    corp_num: number;
    biz_num?: number;
    biz_started_at?: string;
    corp_status?: string;
    biz_type?: string;
    logo_image?: string;
    site_url?: string;
}

interface RequestCard {
    title: string;
    reward_price: number;
    currency: "USD" | "KRW" | "JPY" | "";
    address: string;
    start_date: Date;
    renderLogo: boolean;
    logo_image?: string;
}

export interface ReqCreateCorpProfile {
    corp_id: number;
    corp_name: string;
    nationality: string;
    corp_domain?: string;
    ceo_name?: string;
    corp_address?: string;
    phone_number?: string;
    corp_num: number;
    biz_num?: number;
    biz_started_at?: string;
    corp_status?: string;
    biz_type?: string;
    logo_image?: string;
    site_url?: string;
}

export interface ResCreateCorpProfile {
    corp_id: string;
}

export interface ReqGetCorpProfile {
    corp_num: number;
}

export interface ResGetCorpProfile {
    corp: Corporation;
    past_requests: RequestCard[];
}