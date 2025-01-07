import "joi-extract-type";
import * as Joi from "@hapi/joi";
import { SCHOOL_STATUS_ENUM } from "../../enum/service/Student";
import { USER_GENDER_ENUM } from "../../enum/service/User";
import { COUNTRY_CODE_ENUM } from "../../enum/service/CountryCode";
import { ReqCreateStudentProfileSchema } from "../../joi/service/Student";

export interface AcademicHistoryData {
    school_id: number;
    degree: string;
    faculty: string;
    /** TODO: school_name -> school_name_glb */
    school_name: string;
    start_date: string;
    end_date: string;
    status: SCHOOL_STATUS_ENUM;
    logo?: string;
}

export interface LanguageData {
    level: number;
    exam_result: string;
    /** 시험 명칭 */
    exam_name_glb: {
        [country_code in COUNTRY_CODE_ENUM]?: string;
    };
    /** 어떠한 언어를 대상으로 하는 시험인지 */
    language: string;
}

export interface StudentCardData {
    student_id: number;
    name_glb: {
        [country_code in COUNTRY_CODE_ENUM]?: string;
    };
    nationality: COUNTRY_CODE_ENUM;
    academic_history: AcademicHistoryData[];
    major: string;
    exam_history?: LanguageData[];
    image?: string;
}

interface StudentOpenData extends StudentCardData {
    birth_date: string;
    gender: USER_GENDER_ENUM;
    has_car: 0 | 1;
    keyword_list: string[];
}

interface StudentPrivateData {
    phone_number: string;
    emergency_contact: string;
}

interface StudentProfileData<includePrivate extends boolean> {
    profile: StudentOpenData;
    contact: includePrivate extends true ? undefined : StudentPrivateData;
}

export interface ReqGetStudentProfile {
    student_id: number;
}

export interface ResGetStudentProfile<includePrivate extends boolean> extends StudentProfileData<includePrivate> {}

export interface ReqCreateStudentProfile extends Joi.extractType<typeof ReqCreateStudentProfileSchema> {}
export interface ResCreateStudentProfile {}

export interface ReqUpdateStudentProfile extends ReqCreateStudentProfile {}
export interface ResUpdateStudentProfile extends ReqCreateStudentProfile {}
