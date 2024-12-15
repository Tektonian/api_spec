import { Tspec } from "tspec";
import { RequestHandler } from "express";

import { ReqCreateChatRoom, ResCreateChatRoom } from "../../types/chat/chatRoom";
export type ChatAPISpec = Tspec.DefineApiSpec<{
    tags: ['API related with chat'],
    basePath: "/api/message",
    paths: {
        "/chatroom":{
            post: {
                summary: "Create chatroom",
                description: "Request create chatroom",
                handler: RequestHandler<undefined, ResCreateChatRoom, ReqCreateChatRoom>
            }
        },
        "/upload": {
            post: {
                summary: "Upload image data",
                description: "Upload image data to server",
            },
        },
        "/check-attending": {
            post: {
                summary: "Student send check-attending message",
                description: "Student send check-attending message",
            },
        },
        "/request/status/contract": {
            post: {
                summary: "Change request_status to contract"
            }
        },
        "/request/status/finish": {
            post: {
                summary: "Change request_status to finish",
            },
        },
        "/request/provider": {
            post: {
                summary: "Update provider list",
                description: "Update provider_ids in Request table. \
                              It works as flipping boolean. \
                              If you send once it will add user_id, and \
                              if you send one more it will remove usr_id"
            }
        }
    }
}>