import "joi-extract-type";
import * as Joi from "@hapi/joi";
import { ACADEMIC_STATUS_ENUM } from "../../enum/service/Academic";
import { USER_GENDER_ENUM } from "../../enum/service/User";
import { COUNTRY_CODE_ENUM } from "../../enum/service/CountryCode";
import { ReqCreateStudentProfileSchema } from "../../joi/service/Student";
import { z } from "zod";

export interface AcademicHistoryData {
    school_id: number;
    degree: string;
    faculty: string;
    /** TODO: school_name -> school_name_glb */
    school_name: string;
    start_date: string;
    end_date: string;
    status: ACADEMIC_STATUS_ENUM;
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

interface CommonStudentData {
    student_id: number;
    name_glb: {
        [country_code in COUNTRY_CODE_ENUM]?: string;
    };
    image?: string;
}

export interface StudentCardData extends CommonStudentData {
    nationality: COUNTRY_CODE_ENUM;
    major: string;
    academic_history: AcademicHistoryData[];
    exam_history?: LanguageData[];
}

interface StudentOpenData extends CommonStudentData {
    has_car: 0 | 1;
    keyword_list: string[];
}

interface StudentPrivateData<IncludePrivate extends boolean> {
    birth_date: IncludePrivate extends true ? string : undefined;
    gender: IncludePrivate extends true ? USER_GENDER_ENUM : undefined;
    phone_number: IncludePrivate extends true ? string : undefined;
    emergency_contact: IncludePrivate extends true ? string : undefined;
}

export interface StudentProfileData<IncludePrivate extends boolean>
    extends StudentOpenData,
        StudentPrivateData<IncludePrivate> {}

export interface ReqGetStudentProfile {
    student_id: number;
}

export interface ResGetStudentProfile<IncludePrivate extends boolean> extends StudentProfileData<IncludePrivate> {}

// Override keyword_list type for type inference of IDE
export interface ReqCreateStudentProfile extends z.infer<typeof ReqCreateStudentProfileSchema> {}

export interface ResCreateStudentProfile {}

export interface ReqUpdateStudentProfile extends ReqCreateStudentProfile {}
export interface ResUpdateStudentProfile extends ReqCreateStudentProfile {}
