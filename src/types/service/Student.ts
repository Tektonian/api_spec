
export interface AcademicHistoryData {
    degree: string;
    faculty: string;
    school_name: string;
    start_date: string;
    end_date: string;
    status: 0 | 1 | 2; // 졸업 | 재학 | 휴학 
    logo?: string;
}

export interface LanguageData {
    level: number;
    exam_result: string;
    exam_name: string;
    language: string;
}

export interface StudentProfileData {
    userType: string;
    name_glb: object;
    nationality: string;
    age: string;
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

export interface ReqStudentProfile {
    student_id: number;
}

export interface ResStudentProfile {
    profile: StudentProfileData;
    review: StudentReviewData[];
}
// Model attributes
export interface ReqCreateStudentReview {
}

export interface ResCreateStudentReview {
    status: string;
    review: StudentReviewData;
}
