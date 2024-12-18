import { RequestHandler } from "express";
import { ReqTryJoin, ResTryJoin } from "../../types/chat/webSocket";
import { ResSomeoneSent } from "../../types/chat/webSocket";
import { ReqUpdateLastRead } from "../../types/chat/webSocket";
import { ReqSendMessage } from "../../types/chat/webSocket";
import { ResSSEUnread } from "../../types/chat/webSocket";
import { ResMessage } from "../../types/chat/webSocket";
import { Tspec } from "tspec";

export type WebSocketAPISpec = Tspec.DefineApiSpec<{
    tags: ["WebSocket/Chat"];
    basePath: "/api/chat";
    paths: {
        "/userTryJoin": {
            post: {
                summary: "When user try join";
                description: "";
                handler: RequestHandler<ReqTryJoin, ResTryJoin>;
            };
        };
        "/userSentEvent-Response": {
            put: {
                summary: "user sent event";
                description: "user sent event";
                handler: RequestHandler<undefined, ResSomeoneSent>;
            };
        };
        "/userSentEvent-WhetherSendAlarm/SSE": {
            put: {
                summary: "send SSE alarm";
                description: "send alarm";
                handler: RequestHandler<undefined, ResSSEUnread>;
            };
        };
        "/userSentEvent-WhetherSendAlarm/UpdateChatRoom": {
            put: {
                summary: "send Update ChatRoom Response";
                description: "See /updateChatRoom";
            };
        };
        "/userSentEvent-WhetherSendAlarm/SendAlarm": {
            put: {
                summary: "send mobile alarm";
                description: "send alarm";
            };
        };
        "/updateLastRead": {
            put: {
                summary: "Update server-side last read sequence";
                description: "";
                handler: RequestHandler<ReqUpdateLastRead, undefined>;
            };
        };
        "/sendMessage": {
            put: {
                summary: "Message was sent at user-side";
                description: "";
                handler: RequestHandler<ReqSendMessage, undefined>;
            };
        };
        "/updateChatRoomEvent": {
            put: {
                summary: "Update chat room";
                description: "";
                handler: RequestHandler<undefined, ResMessage>;
            };
        };
    };
}>;
