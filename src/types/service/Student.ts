import { REQUEST_STATUS_ENUM } from "../../enum/service/Request";
import { SCHOOL_STATUS_ENUM } from "../../enum/service/Student";
import { USER_GENDER_ENUM } from "../../enum/service/User";
import { RequestCard } from "./Request";
export interface AcademicHistoryData {
    school_id: number;
    degree: string;
    faculty: string;
    school_name: string;
    start_date: string;
    end_date: string;
    status: SCHOOL_STATUS_ENUM;
    logo?: string;
}

export interface LanguageData {
    exam_id: number;
    exam_result: { class: string; level: number };
}

export interface StudentProfileData {
    name_glb: object;
    nationality: string;
    birth_date: string;
    phone_number: string;
    emergency_contact: string;
    email_verified?: Date;
    gender: USER_GENDER_ENUM;
    image: string;
    has_car: 0 | 1;
    keyword_list: string[];
    academic_history: AcademicHistoryData[];
    exam_history?: LanguageData[];
}

export interface StudentReviewData {
    request_id: number;
    commu_ability: number;
    consumer_id: number;
    corp_id: number | null;
    goal_fulfillment: number;
    lang_fluent: number;
    need_improve: string;
    orgn_id: number | null;
    praise: string;
    want_cowork: number;
    was_diligent: number;
    was_late: number;
    was_proactive: number;
}

export interface ReqGetStudentProfile {
    student_id: number;
}

export interface ResGetStudentProfile {
    profile: StudentProfileData;
    requests: RequestCard[];
    reviews: StudentReviewData[];
}

export interface ReqCreateStudentProfile {
    name_glb: object;
    nationality: string;
    bith_date: Date;
    phone_number: string;
    emergency_contact: string;
    email_verified?: Date;
    gender: USER_GENDER_ENUM;
    image: string;
    has_car: 0 | 1;
    keyword_list?: string[];
    academic_history: AcademicHistoryData[];
    exam_history: LanguageData[];
}

export interface ResCreateStudentProfile {}

// Model attributes
export interface ReqCreateStudentReview {}

export interface ResCreateStudentReview {
    status: string;
    review: StudentReviewData;
}
