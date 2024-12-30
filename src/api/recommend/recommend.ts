import { RequestHandler } from "express";
import { RequestCard } from "../../types/service/Request";
import { StudentCardData } from "../../types/service/Student";
import { Tspec } from "tspec";

export type RecommendAPISpec = Tspec.DefineApiSpec<{
    tags: ["Recommend"];
    basePath: "/api/recommend";
    paths: {
        "/students": {
            post: {
                summary: "Get recommended student list";
                description: `Get Recommend student list by request_id
                Only an owner of a Request has a permission`;
                header: {
                    session: "corp" | "orgn" | "normal";
                };
                handler: RequestHandler<undefined, StudentCardData[], { request_id: string }>;
                responses: {
                    /** When server response correctly */
                    200: StudentCardData[];
                    /** When Non-authorized user, who doesn't have Corp | Orgn identity, tried to get commend list*/
                    400: undefined;
                    /** When server failed */
                    500: undefined;
                };
            };
        };
        "/requests": {
            post: {
                summary: "Get recommended request list";
                description: `Get recommended Request list by student_id
                Only students have permission to get recommended requests`;
                header: {
                    session: "student";
                };
                handler: RequestHandler<undefined, RequestCard[], { student_id: string }>;
                responses: {
                    /** When server response correctly */
                    200: RequestCard[];
                    /** When Non-authorized user, who doesn't have Student identity, tried to get commend list*/
                    400: undefined;
                    /** When server failed */
                    500: undefined;
                };
            };
        };
    };
}>;
