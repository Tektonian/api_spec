import { Tspec } from "tspec";
import { RequestHandler } from "express";

import { ReqIdentityVeraify, ResIdentityVerify } from "../../types/service/Verification";
import { ReqCallbackIdentityVerify, ResCallbackIdentityVerify } from "../../types/service/Verification";


export type VerificationAPISpec = Tspec.DefineApiSpec<{
    tags: ['Verification'],
    basePath: '/api/verification',
    paths: {
        "/identity-verify": {
            post: {
                summary: "",
                description: "",
                handler: RequestHandler<undefined, ResIdentityVerify, ReqIdentityVeraify>
            }
        },
        "/callback/identity-verify": {
            post: {
                summary: "",
                description: "",
                handler: RequestHandler<undefined, ResCallbackIdentityVerify, ReqCallbackIdentityVerify>
            }
        }
    }
}>