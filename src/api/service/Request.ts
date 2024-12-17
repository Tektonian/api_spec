import { Tspec } from "tspec";
import { RequestHandler } from "express";

import { ReqCreateRequest, ResCreateRequest } from "../../types/service/Request";
import { ReqGetRequest, ResGetRequest } from "../../types/service/Request";
import { ReqUpdateRequestStatusContract, ResUpdateRequestStatusContract } from "../../types/service/Request";
import { ReqUpdateRequestProviderIds, ResUpdateRequestProviderIds } from "../../types/service/Request";

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
                handler: RequestHandler<ReqGetRequest, ResGetRequest>
            }
        }
        "/update": {
            post: {
                summary: "Update request content",
                description: "",
            }
        },
        "/status/contract": {
            post: {
                summary: "Change request_status to contract"
                handler: RequestHandler<undefined, ReqUpdateRequestStatusContract, ResUpdateRequestStatusContract>
            }
        },
        "/status/finish": {
            post: {
                summary: "Change request_status to finish",
            },
        },
        "/provider": {
            post: {
                summary: "Update provider list",
                description: "Update provider_ids in Request table. \
                              It works as flipping boolean. \
                              If you send once it will add user_id, and \
                              if you send one more it will remove usr_id",
                handler: RequestHandler<undefined, ReqUpdateRequestProviderIds, ResUpdateRequestProviderIds>
            }
        }
    }
}>