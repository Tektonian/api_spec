import { Tspec } from "tspec";
import { RequestHandler } from "express";

import {
    ReqCreateStudentReveiw,
    ReqGetStudentReviews,
    ResCreateStudentReview,
    StudentReviewData,
} from "../../types/service/StudentReview";
import { ReqGetStudentProfile } from "../../types/service/Student";

export type StudentReviewAPISpec = Tspec.DefineApiSpec<{
    tags: ["Student review"];
    basePath: "/api/student-review";
    paths: {
        "/": {
            post: {
                summary: "Create Student Review";
                description: "";
                handler: RequestHandler<undefined, ResCreateStudentReview, ReqCreateStudentReveiw>;
            };
        };
        "/list/:student_id": {
            get: {
                summary: "Get All Student Reviews";
                description: "";
                header: {
                    session: " 'corp' | 'orgn' ";
                };
                handler: RequestHandler<ReqGetStudentReviews, StudentReviewData[]>;
            };
        };
    };
}>;
