
export interface AcademicHistoryData {
    school_id: number;
    degree: string;
    faculty: string;
    school_name: string;
    start_date: string;
    end_date: string;
    status: 0 | 1 | 2; // 졸업 | 재학 | 휴학 
    logo?: string;
}

export interface LanguageData {
    exam_id: number;
    exam_result: { class: string; level: number };
}

export interface StudentProfileData {
    name_glb: object;
    nationality: string;
    bith_date: Date;
    phone_number: string;
    emergency_contact: string;
    email_verified?: Date;
    gender: 0 | 1 // 남 | 여
    image: string;
    has_car?: boolean;
    keyword_list?: object;
    academic_history: AcademicHistoryData[];
    exam_history: LanguageData[];
}

interface RequestOfStudentReview {
    request_id: number;
    title: string;
    subtitle: string;
    reward_price: number;
    currency: string;
    address: string;
    start_date: string;
    logo_image: string;
}

export interface StudentReviewData {
    request: RequestOfStudentReview
    commu_ability: number;
    consumer_id: number;
    corp_id: number | null;
    goal_fulfillment: number;
    id: number;
    lang_fluent: number;
    need_improve: string;
    orgn_id: number | null;
    praise: string;
    request_id: number;
    request_url: string;
    student_id: number;
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
    review: StudentReviewData[];
}

export interface ReqCreateStudentProfile {
    name_glb: object;
    nationality: string;
    bith_date: Date;
    phone_number: string;
    emergency_contact: string;
    email_verified?: Date;
    gender: 0 | 1 // 남 | 여
    image: string;
    has_car?: boolean;
    keyword_list?: object;
    academic_history: AcademicHistoryData[];
    exam_history: LanguageData[];
}

export interface ResCreateStudentProfile {

}

// Model attributes
export interface ReqCreateStudentReview {
}

export interface ResCreateStudentReview {
    status: string;
    review: StudentReviewData;
}
