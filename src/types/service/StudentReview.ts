import * as Joi from "@hapi/joi";
import "joi-extract-type";

import { ReqCreateStudentReveiwSchema } from "../../joi/service/StudentReview";
interface ReviewData {}

// Model attribute
export interface ReqCreateStudentReveiw extends Joi.extractType<typeof ReqCreateStudentReveiwSchema> {}

export interface ResCreateStudentReview {
    status: "ok";
}
