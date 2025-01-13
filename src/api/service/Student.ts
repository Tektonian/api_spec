import { ReqGetStudentProfile, ReqUpdateStudentProfile } from "../../types/service/Student";
import { ResGetStudentProfile, ResUpdateStudentProfile } from "../../types/service/Student";
import { RequestHandler } from "express";
import { Tspec } from "tspec";

export type StudentAPISpec = Tspec.DefineApiSpec<{
    tags: ["Student"];
    basePath: "/api/students";
    paths: {
        "/:student_id": {
            get: {
                summary: "Get student profile";
                description: "This api usually is being used for student information page";
                header: {
                    session: "'normal' | 'corp' | 'orgn' ";
                };
                handler: RequestHandler<ReqGetStudentProfile, ResGetStudentProfile<false>>;
            };
        };
        "/update": {
            post: {
                summary: "Update student profile";
                description: "Update stuent profile";
                header: {
                    /** Only students can update their own profile */
                    session: "'student'";
                };
                handler: RequestHandler<undefined, ResUpdateStudentProfile, ReqUpdateStudentProfile>;
            };
        };
    };
}>;
