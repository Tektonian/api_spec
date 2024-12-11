import { Tspec } from "tspec";
import { RequestHandler } from "express";

import { ReqCreateStudentReview, ResCreateStudentReview} from "../../types/service/StudentReview";
import { ReqGetStudentReveiw, ResGetStudentReview } from "../../types/service/StudentReview";

export type StudentReviewAPISpec = Tspec.DefineApiSpec<{
    tags: ['Request'],
    basePath: '/api/student/review',
    paths: {
        "/": {
            post: {
                summary: "Create Student review",
                description: "",
                handler: RequestHandler<undefined, ResCreateStudentReview, ReqCreateStudentReview>
            }
        },
        "/:student_id": {
            get: {
                summary: "Get Student information",
                description: "",
                handler: RequestHandler<ReqGetStudentReveiw, ResGetStudentReview>
            }
        }
    }
}>