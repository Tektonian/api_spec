import { Tspec } from "tspec";
import { RequestHandler } from "express";

import { ReqGetStudentReveiw, ResGetStudentReview } from "../../types/service/StudentReview";

export type StudentReviewAPISpec = Tspec.DefineApiSpec<{
    tags: ['Request'],
    basePath: '/api/student/review',
    paths: {
        "/:student_id": {
            get: {
                summary: "Get Student information",
                description: "",
                handler: RequestHandler<ReqGetStudentReveiw, ResGetStudentReview>
            }
        }
    }
}>