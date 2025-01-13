import { z } from "zod";
import zodToJsonSchema from "zod-to-json-schema";

const EvaluationScore = z.number().min(0).max(10);

export const ReqCreateCorpReviewSchema = z.object({
    request_id: z.number().positive(),
    review_text: z.string(),
    prep_requirement: z.string().optional().describe("다른 학생들에게 어떠한 것이 있으면 좋다고 조언하기 위해서"),
    work_atmosphere: z.string(),
    sense_of_achive: EvaluationScore,
});

export const ReqCreateCorpReviewSchemaJSON = zodToJsonSchema(ReqCreateCorpReviewSchema);
