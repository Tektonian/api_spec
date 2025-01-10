import Joi from "@hapi/joi";
import parse from "joi-to-json";

const EvaluationScore = Joi.number().required().min(0).max(10);

export const ReqCreateCorpReviewSchema = Joi.object({
    request_id: Joi.number().positive().required(),
    review_text: Joi.string().required(),
    prep_requirement: Joi.string().description("다른 학생들에게 어떠한 것이 있으면 좋다고 조언하기 위해서"),
    work_atmosphere: Joi.string().required(),
    sense_of_achive: EvaluationScore,
});

export const ReqCreateCorpReviewSchemaJSON = parse(ReqCreateCorpReviewSchema);
