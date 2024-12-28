import { RequestCard } from "./Request";
import "joi-extract-type";
import * as Joi from "@hapi/joi";
import { ReqCreateCorpProfileSchema } from "../../joi/service/Corporation";

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
    corp_status?: number;
    biz_type?: string;
    logo_image?: string;
    site_url?: string;
}

interface CorporationReview {
    review_text: string;
    prep_requirement: string;
    sense_of_achive: number;
    work_atmostphere: number;
}

export interface ReqCreateCorpProfile extends Joi.extractType<typeof ReqCreateCorpProfileSchema> {}

export interface ResCreateCorpProfile {
    corp_id: string;
}

export interface ReqGetCorpProfile {
    corp_id: number;
}

export interface ResGetCorpProfile {
    corp: Corporation;
    requests: RequestCard[];
    reviews: CorporationReview[];
}
