import { Tspec } from "tspec";
import { RequestHandler } from "express";

import { ReqCreateCorpProfile, ResCreateCorpProfile } from "../../types/service/Corporation";
import { ReqGetCorpProfile, ResGetCorpProfile } from "../../types/service/Corporation";

export type CorporationAPISpec = Tspec.DefineApiSpec<{
    tags: ["Corporation"];
    basePath: "/api/corporations";
    paths: {
        "/": {
            post: {
                summary: "Create Corporation";
                description: "";
                handler: RequestHandler<undefined, ResCreateCorpProfile, ReqCreateCorpProfile>;
            };
        };
        "/:corp_id": {
            get: {
                summary: "Get Corporation information";
                description: "";
                handler: RequestHandler<ReqGetCorpProfile, ResGetCorpProfile>;
                responses: {
                    200: ResGetCorpProfile;
                    /** Server failed */
                    500: undefined;
                };
            };
        };
    };
}>;
