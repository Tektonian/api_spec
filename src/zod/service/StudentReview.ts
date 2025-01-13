import { z } from "zod";
import zodToJsonSchema from "zod-to-json-schema";

const EvaluationScore = z.number().min(0).max(10);

export const ReqCreateStudentReveiwSchema = z.object({
    consumer_id: z.number().describe("Consumer id of Consumer table"),
    student_id: z.number().describe("Student id of Student table"),
    request_id: z.number().describe("Request id of Request table"),
    // Score of student review
    was_late: EvaluationScore.describe("How student late for work"),
    was_proactive: EvaluationScore.describe("How student late for work"),
    was_diligent: EvaluationScore.describe("How student late for work"),
    commu_ability: EvaluationScore.describe("How student late for work"),
    lang_fluent: EvaluationScore.describe("How student late for work"),
    goal_fulfillment: EvaluationScore.describe("How student late for work"),
    want_cowork: EvaluationScore.describe("How student late for work"),

    praise: z.string(),
    need_improve: z.string(),
});

export const ReqCreateStudentReveiwSchemaJson = zodToJsonSchema(ReqCreateStudentReveiwSchema);
