import { Tspec } from "tspec";
import { RequestHandler } from "express";

import { ResUrgeReview, ResMessageAlarm, ResUnreadTotalCount } from "../../types/service/SSE";
export type ChatAPISpec = Tspec.DefineApiSpec<{
    tags: ['API related with SSE Alarm'],
    basePath: "/api/sse",
    paths: {
        "/": {
            get: {
                summary: "Get unread message count"
            }
        }
    }
}>