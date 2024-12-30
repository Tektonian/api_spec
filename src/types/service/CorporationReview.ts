import "joi-extract-type";
import * as Joi from "@hapi/joi";
import { ReqCreateCorpReviewSchema } from "../../joi/service/CorporationReview";

interface CorpReview {
    request_id: number;
    review_text: string;
    prep_requirement: string;
    sense_of_achive: number;
    work_atmostphere: number;
}

interface StudentReviewProvider {
    student_id: string;
    student_name: string;
    student_image: string;
}

export interface ReqCreateCorpReview extends Joi.extractType<typeof ReqCreateCorpReviewSchema> {}

export interface ResCreateCorpReview {}

export interface ReqGetCorpReview {
    corp_id: number;
}

interface CorpReviewCard extends CorpReview, StudentReviewProvider {}

export interface ResGetCorpReview {
    review: CorpReviewCard[];
}
