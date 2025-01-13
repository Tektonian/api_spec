import { z } from "zod";
import { ReqCreateCorpReviewSchema } from "../../zod/service/CorporationReview";

interface CorpReview {
    request_id: number;
    review_text: string;
    prep_requirement: string;
    work_atmosphere: string;
    sense_of_achive: number;
}

interface StudentReviewProvider {
    student_id: string;
    student_name: string;
    student_image: string;
}

export interface ReqCreateCorpReview extends z.infer<typeof ReqCreateCorpReviewSchema> {}

export interface ResCreateCorpReview {}

export interface ReqGetCorpReview {
    corp_id: number;
}

interface CorpReviewCard extends CorpReview, StudentReviewProvider {}

export interface ResGetCorpReview {
    review: CorpReviewCard[];
}
