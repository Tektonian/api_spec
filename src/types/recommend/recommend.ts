import type { SearchResponse } from "meilisearch/dist/types";

/** Recommend Request schema */
export interface ReqRecommendRequest {
    request_id: number;
}

export interface ResRecommendRequest extends SearchResponse<Record<string, any>, {filter: string[], sort: []}> {}

/** Recommend Request schema */
export interface ReqStudentRequest {
    /** 
     * Student id
     * @example 2
     */
    student_id: number;
}

export interface ResStudentRequest extends SearchResponse<Record<string, any>, {filter: string[], sort: []}> {}