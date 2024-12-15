interface SearchExamData {
    exam_id: number;
    exam_name_glb: { en: string; kr: string; jp: string};
    exam_result_type: string;
    exam_results: {class: string; level: number}[];
    lang_country_code: string;
}

export interface ReqSearchExam {
    // Get request
}
export interface ResSearchExam {
    status: string;
    ret: SearchExamData[];
}