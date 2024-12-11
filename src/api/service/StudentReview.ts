import { Tspec } from "tspec";
import { RequestHandler } from "express";

import { ReqCreateStudentReveiw, ResCreateStudentReview } from "../../types/service/StudentReview";

export type StudentReviewAPISpec = Tspec.DefineApiSpec<{
    tags: ['Student review'],
    basePath: '/api/student-review',
    paths: {
        "/": {
            post: {
                summary: "Create Student Review",
                description: "",
                handler: RequestHandler<undefined, ResCreateStudentReview, ReqCreateStudentReveiw>
            }
        }
    }
}>