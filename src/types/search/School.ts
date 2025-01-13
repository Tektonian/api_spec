import { z } from "zod";
import { ReqSearchSchoolScheme } from "../../zod/search/School";

export interface ReqSearchSchool extends z.infer<typeof ReqSearchSchoolScheme> {}

interface SearchSchoolData {
    school_id: number;
    school_name: string;
    school_name_glb: Object;
    country_code: string;
}
export interface ResSearchSchool extends Array<SearchSchoolData> {}
