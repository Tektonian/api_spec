
/* Part of Meilisearch result type */
type Hit<T = Record<string, any>> = T & {
    _formatted?: Partial<T>;
    _rankingScore?: number;
};
type Hits<T = Record<string, any>> = Array<Hit<T>>;
type Facet = string;

type SearchResponse<T = Record<string, any>> = {
  hits: Hits<T>;
  processingTimeMs: number;
  query: string;
} 
/* End - Meilisearch result type end */

/** Recommend Request schema */
export interface ReqRecommendRequest {
    request_id: number;
}

export interface ResRecommendRequest extends SearchResponse<Record<string, any>> {}

/** Recommend Request schema */
export interface ReqStudentRequest {
    /** 
     * Student id
     * @example 2
     */
    student_id: number;
}

export interface ResStudentRequest extends SearchResponse<Record<string, any>> {}