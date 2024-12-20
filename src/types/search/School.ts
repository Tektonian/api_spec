import * as Joi from "@hapi/joi";
// This is optional, but without it you need to manually generate
// a type or interface for ValidatedRequestSchema members
import "joi-extract-type";

import { ReqSearchSchoolScheme } from "../../joi/search/School";

export interface ReqSearchSchool {
    ["query"]: Joi.extractType<typeof ReqSearchSchoolScheme>;
}
interface SearchSchoolData {
    school_id: number;
    school_name: string;
    school_name_glb: Object;
    country_code: string;
}
export interface ResSearchSchool {
    status: string;
    ret: SearchSchoolData[];
}
