import { RequestHandler } from "express";
import { ReqSearchSchoolScheme } from "../../zod/search/School";
import { ReqSearchSchool, ResSearchSchool } from "../../types/search/School";
import { Tspec } from "tspec";

export type SearchSchoolAPISpec = Tspec.DefineApiSpec<{
    tags: ["Search School"];
    basePath: "/api/search/schools";
    paths: {
        "/": {
            get: {
                summary: "Get school list";
                description: "Get school list by country code";
                responses: {
                    200: ResSearchSchool;
                };
                handler: RequestHandler<undefined, ResSearchSchool, undefined, ReqSearchSchool>;
            };
        };
    };
}>;
