import { z } from "zod";
import { ReqCreateCorpProfileSchema } from "../../zod/service/Corporation";
import { COUNTRY_CODE_ENUM } from "../../enum/service/CountryCode";

export interface ReqCreateCorpProfile extends z.infer<typeof ReqCreateCorpProfileSchema> {}

export interface ResCreateCorpProfile {
    corp_id: string;
}

export interface CorpCardData {
    /** Id of Corporation */
    corp_id: number;
    /** Name of Corporation */
    corp_name: string;
    /** Nationality of Corporation */
    nationality: COUNTRY_CODE_ENUM;
    ceo_name?: string;
    /** Real Address of Corporation */
    corp_address?: string;
    biz_type?: string;
    logo_image?: string;
    site_url?: string;
    /** Email domain address of Corporation */
    corp_domain?: string;
    /** Phone Number for Contacting Corporation */
    /** TODO: 지금은 필요할 것 같아서 그대로 유지 나중에 없애기 -> 서비스가 불안정해서 개인 연락 필요할수도? */
    phone_number?: string;
}

export interface ReqGetCorpProfile {
    corp_id: number;
}

export interface ResGetCorpProfile extends CorpCardData {}
