// Model attribute
export interface ReqGetStudentReveiw {
    student_id: number;
}

export interface ResGetStudentReview extends JSON {

}

// Model attributes
export interface ReqCreateStudentReview {
}

export interface ResCreateStudentReview {
    status: string;
    review: JSON;
}