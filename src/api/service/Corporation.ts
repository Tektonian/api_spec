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
                responses: {
                    200: ResCreateCorpProfile;
                    /** When user sent wrong data */
                    400: undefined;
                    /** When server failed to create profile */
                    500: undefined;
                };
            };
        };
        "/:corp_id": {
            get: {
                summary: "Get Corporation information";
                description: "";
                handler: RequestHandler<ReqGetCorpProfile, ResGetCorpProfile, undefined>;
                responses: {
                    200: ResGetCorpProfile;
                    /** Server failed */
                    500: undefined;
                };
            };
        };
    };
}>;
