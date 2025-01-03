import { Tspec } from "tspec";
import { RequestHandler } from "express";

import { ReqCreateUserData, ReqGetUserData, ResCreateUserData, ResGetUserData } from "../../types/service/User";

export type StudentReviewAPISpec = Tspec.DefineApiSpec<{
    tags: ["Student review"];
    basePath: "/api/users";
    paths: {
        "/": {
            get: {
                summary: "Get User Data";
                description: "Showing User Information in mypage";
                header: {
                    session: "normal" | "student" | "corp" | "orgn";
                };
                handler: RequestHandler<ReqGetUserData, ResGetUserData>;
            };
        };
        "/post": {
            post: {
                summary: "Create User Data";
                description: "";
                handler: RequestHandler<undefined, ResCreateUserData, ReqCreateUserData>;
                responses: {
                    /** Success */
                    200: ReqCreateUserData;
                    /** Failed to get request */
                    500: undefined;
                };
            };
        };
    };
}>;
