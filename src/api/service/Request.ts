import { Tspec } from "tspec";
import { RequestHandler } from "express";

import { ReqCreateRequest, ResCreateRequest } from "../../types/service/Request";
import { ReqGetRequest, ResGetRequest } from "../../types/service/Request";

export type RequestAPISpec = Tspec.DefineApiSpec<{
    tags: ['Request'],
    basePath: '/api/request',
    paths: {
        "/": {
            post: {
                summary: "",
                description: "",
                handler: RequestHandler<undefined, ResCreateRequest, ReqCreateRequest>
            }
        },
        "/:request_id": {
            get: {
                summary: "",
                description: "",
                handler: RequestHandler<undefined, ResGetRequest, undefined, ReqGetRequest>
            }
        }
    }
}>