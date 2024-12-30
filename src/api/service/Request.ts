import { Tspec } from "tspec";
import { RequestHandler } from "express";

import { ReqCreateRequest, ResCreateRequest } from "../../types/service/Request";
import { ReqGetRequest, ResGetRequest } from "../../types/service/Request";
import { ReqAllRequestCard, ResAllRequestCard } from "../../types/service/Request";
import { ReqUpdateRequestStatusContract, ResUpdateRequestStatusContract } from "../../types/service/Request";
import { ReqUpdateRequestProviderIds, ResUpdateRequestProviderIds } from "../../types/service/Request";

export type RequestAPISpec = Tspec.DefineApiSpec<{
    tags: ["Request"];
    basePath: "/api/request";
    paths: {
        "/": {
            post: {
                summary: "Create Request";
                description: "";
                header: {
                    /** Pertmitted session user only */
                    session: "normal" | "corp";
                };
                handler: RequestHandler<undefined, ResCreateRequest, ReqCreateRequest>;
                responses: {
                    /** Success */
                    200: ResCreateRequest;
                    /** Unauthorizsed user tried to create request */
                    401: undefined;
                    /** Failed to create request */
                    500: undefined;
                };
            };
        };
        "/list": {
            get: {
                summary: "Get all request card information available";
                description: `Get all request card information available.
                Usually used by Student | Corp | Orgn profile pages`;
                header: {
                    /** Pertmitted session user only
                     * @see {@link Request.ts } - Read Link for more information
                     */
                    session: "normal" | "corp" | "orgn";
                };
                handler: RequestHandler<undefined, ResAllRequestCard, ReqAllRequestCard>;
                responses: {
                    /** Success */
                    200: ReqAllRequestCard;
                    /** Failed to get request */
                    500: undefined;
                };
            };
        };
        "/:request_id": {
            get: {
                summary: "Get Request information";
                description: "Get detailed request informat. This router is being used for Request page";
                handler: RequestHandler<ReqGetRequest, ResGetRequest>;
            };
        };
        "/update": {
            post: {
                summary: "Update request content";
                description: "";
            };
        };
        "/status/contract": {
            post: {
                summary: "Change request_status to contract";
                handler: RequestHandler<undefined, ReqUpdateRequestStatusContract, ResUpdateRequestStatusContract>;
            };
        };
        "/status/finish": {
            post: {
                summary: "Change request_status to finish";
            };
        };
        "/provider": {
            post: {
                summary: "Update provider list";
                description: "Update provider_ids in Request table. \
                              It works as flipping boolean. \
                              If you send once it will add user_id, and \
                              if you send one more it will remove usr_id";
                handler: RequestHandler<undefined, ReqUpdateRequestProviderIds, ResUpdateRequestProviderIds>;
            };
        };
    };
}>;
