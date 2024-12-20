import Joi from "joi";
export const ReqCreateStudentReveiwSchema = Joi.object({
    was_late: Joi.number().min(0).max(10),
});
