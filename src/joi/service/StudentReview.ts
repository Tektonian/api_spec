import Joi from "@hapi/joi";
import parse from "joi-to-json";

const EvaluationScore = Joi.number().required().min(0).max(10);

export const ReqCreateStudentReveiwSchema = Joi.object({
    consumer_id: Joi.number().required().description("Consumer id of Consumer table"),
    student_id: Joi.number().required().description("Student id of Student table"),
    request_id: Joi.number().required().description("Request id of Request table"),
    // Score of student review
    was_late: EvaluationScore.description("How student late for work"),
    was_proactive: EvaluationScore.description("How student late for work"),
    was_diligent: EvaluationScore.description("How student late for work"),
    commu_ability: EvaluationScore.description("How student late for work"),
    lang_fluent: EvaluationScore.description("How student late for work"),
    goal_fulfillment: EvaluationScore.description("How student late for work"),
    want_cowork: EvaluationScore.description("How student late for work"),

    praise: Joi.string().required(),
    need_improve: Joi.string().required(),
});

export const ReqCreateStudentReveiwSchemaJson = parse(ReqCreateStudentReveiwSchema);
