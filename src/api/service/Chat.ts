import { Tspec } from "tspec";
import { RequestHandler } from "express";

import { ResCreateChatRoom, ReqCreateChatRoom } from "../../types/service/Chat";
export type ChatAPISpec = Tspec.DefineApiSpec<{
    tags: ["API related with chat"];
    basePath: "/api/message";
    paths: {
        "/chatroom": {
            post: {
                summary: "Create chatroom";
                description: "Request create chatroom. This API called when student press 수락요청 button at front-side";
                handler: RequestHandler<undefined, ResCreateChatRoom, ReqCreateChatRoom>;
            };
        };
        "/upload": {
            post: {
                summary: "Upload image data";
                description: "Upload image data to server";
            };
        };
        "/check-attending": {
            post: {
                summary: "Student send check-attending message";
                description: "Student send check-attending message";
            };
        };
    };
}>;
