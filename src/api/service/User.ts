import { Tspec } from "tspec";
import { RequestHandler } from "express";

import { ReqGetUserData, ResGetUserData } from "../../types/service/User";
import { ReqMyPage, ResMyPage } from "../../types/service/User";
import { ReqUpdateUserProfile, ResUpdateUserProfile } from "../../types/service/User";

export type UserAPISpec = Tspec.DefineApiSpec<{
    tags: ["User Information"];
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
        "/mypage": {
            get: {
                summary: "Get mypage data";
                description: "Get mypage data";
                header: {
                    session: "normal";
                };
                handler: RequestHandler<ReqMyPage, ResMyPage>;
                responses: {
                    200: ResMyPage;
                    /** Failed to get mypage data */
                    400: undefined;
                };
            };
        };
        "/update": {
            post: {
                summary: "Update user profile";
                description: "Update user profile";
                header: {
                    session: "normal";
                };
                handler: RequestHandler<undefined, ResUpdateUserProfile, ReqUpdateUserProfile>;
                responses: {
                    /** Successfully updated user profile */
                    200: ResUpdateUserProfile;
                    /** Failed to update user profile */
                    400: undefined;
                };
            };
        };
    };
}>;
