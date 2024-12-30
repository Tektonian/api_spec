import * as Joi from "@hapi/joi";
import "joi-extract-type";

import { ReqCreateStudentReveiwSchema } from "../../joi/service/StudentReview";

// Model attribute
export interface ReqCreateStudentReveiw extends Joi.extractType<typeof ReqCreateStudentReveiwSchema> {}

export interface ResCreateStudentReview {}
