interface ReviewData{

}

type EvalScore = 0 | 1 | 2 | 3 | 4 | 5

// Model attribute
export interface ReqCreateStudentReveiw {
    consumer_id: number;
    student_id: number;
    request_id: number;

    was_late: EvalScore;
    was_proactive: EvalScore;
    was_diligent: EvalScore;
    commu_ability: EvalScore;
    lang_fluent: EvalScore;
    goal_fulfillment: EvalScore;
    want_cowork: EvalScore;
    praise: string;
    need_improve: string
}

export interface ResCreateStudentReview {
    status: 'ok';
}

