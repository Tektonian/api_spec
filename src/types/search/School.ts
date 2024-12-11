export interface ReqSearchSchool {
    country_code: string;
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