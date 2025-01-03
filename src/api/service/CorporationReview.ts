import { Tspec } from "tspec";
import { RequestHandler } from "express";

import {
    ReqCreateCorpReview,
    ResCreateCorpReview,
    ReqGetCorpReview,
    ResGetCorpReview,
} from "../../types/service/CorporationReview";

export type CorporationReviewAPISpec = Tspec.DefineApiSpec<{
    tags: ["Corporation Review"];
    basePath: "/api/corporation-reviews";
    paths: {
        "/": {
            post: {
                summary: "Create Corporation Review";
                description: "";
                handler: RequestHandler<undefined, ResCreateCorpReview, ReqCreateCorpReview>;
                responses: {
                    200: ResCreateCorpReview;
                    /** When user sent wrong data */
                    400: undefined;
                    /** When server failed to create Review */
                    500: undefined;
                };
            };
        };
        "/:corp_id": {
            get: {
                summary: "Get Corporation Review";
                description: "";
                handler: RequestHandler<ReqGetCorpReview, ResGetCorpReview, undefined>;
                responses: {
                    200: ResGetCorpReview;
                    /** Server failed */
                    500: undefined;
                };
            };
        };
    };
}>;
