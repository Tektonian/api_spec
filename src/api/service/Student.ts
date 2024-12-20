import { ReqGetStudentProfile, ResGetStudentProfile } from "../../types/service/Student";
import { RequestHandler } from "express";
import { Tspec } from "tspec";

export type StudentAPISpec = Tspec.DefineApiSpec<{
    tags: ["Student"];
    basePath: "/api/students";
    paths: {
        "/:student_id": {
            get: {
                summary: "Get student profile";
                description: "Get student profile";
                cookie: {
                    auth: "Logined" | "not logedin";
                    role: "corp || orgn 유저의 경우 리뷰 획득";
                };
                handler: RequestHandler<ReqGetStudentProfile, ResGetStudentProfile>;
            };
        };
    };
}>;
