import { ReqGetStudentProfile, ResGetStudentProfile } from "../../types/service/Student";
import { ResAllRequestCard } from "../../types/service/Request";
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
                header: {
                    session: "'normal' | 'corp' | 'orgm' ";
                };
                handler: RequestHandler<ReqGetStudentProfile, ResGetStudentProfile<boolean>>;
            };
        };
    };
}>;
