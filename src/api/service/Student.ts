import { ReqCreateStudentProfile, ReqGetStudentProfile, ReqUpdateStudentProfile } from "../../types/service/Student";
import { ResCreateStudentProfile, ResGetStudentProfile, ResUpdateStudentProfile } from "../../types/service/Student";
import { RequestHandler } from "express";
import { Tspec } from "tspec";

export type StudentAPISpec = Tspec.DefineApiSpec<{
    tags: ["Student"];
    basePath: "/api/students";
    paths: {
        "/": {
            post: {
                summary: "Create unverfied student profile of user";
                description: "This router is for a process of verification";
                header: {
                    session: "nomral";
                };
                handler: RequestHandler<undefined, ResCreateStudentProfile, ReqCreateStudentProfile>;
            };
        };
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
