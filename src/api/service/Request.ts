import { Tspec } from "tspec";
import { RequestHandler } from "express";

import { ReqCreateRequest, ResCreateRequest } from "../../types/service/Request";
import { ReqGetRequest, ResGetRequest } from "../../types/service/Request";
import { ReqUpdateRequestStatus, ResUpdateRequestStatus } from "../../types/service/Request";
export type RequestAPISpec = Tspec.DefineApiSpec<{
    tags: ['Request'],
    basePath: '/api/request',
    paths: {
        "/": {
            post: {
                summary: "Create Request",
                description: "",
                handler: RequestHandler<undefined, ResCreateRequest, ReqCreateRequest>
            }
        },
        "/:request_id": {
            get: {
                summary: "Get Request information",
                description: "",
                handler: RequestHandler<undefined, ResGetRequest, undefined, ReqGetRequest>
            }
        }
        "/update": {
            patch: {
                summary: "Update request status",
                description: "",
                handler: RequestHandler<undefined, ResUpdateRequestStatus, ReqUpdateRequestStatus>
            },
            post: {
                summary: "Update request content",
                description: "",
            }
        }
    }
}>