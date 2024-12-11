import { ReqCreateChatRoom, ResCreateChatRoom } from "../../types/chat/chatRoom";
import { RequestHandler } from "express";
import { Tspec } from "tspec";

export type ChatRoomAPISpec = Tspec.DefineApiSpec<{
    tags: ['ChatRoom'],
    basePath: "/api/message",
    paths: {
        "/chatroom": {
            post: {
                summary: "Student user Request create room",
                description: "",
                handler: RequestHandler<undefined, ResCreateChatRoom, ReqCreateChatRoom>
            },
        },
     
    }
}>