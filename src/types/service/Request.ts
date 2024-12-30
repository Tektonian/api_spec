import "joi-extract-type";
import * as Joi from "@hapi/joi";
import { ReqCreateRequestSchema } from "../../joi/service/Request";
import type { REQUEST_STATUS_ENUM } from "../../enum/service/Request";
import type { USER_ROLE_ENUM } from "../../enum/service/User";

interface RequestCard {
    request_id: number;
    title: string;
    reward_price: number;
    currency: string;
    address?: string;
    start_date: string;
    request_status?: REQUEST_STATUS_ENUM;
    logo_image?: string;
}

interface RequestData extends RequestCard {
    /** 작성자 정보 페이저로 넘어가기 위해서 필요 -> 작성자가 어떤 작성자 인지 구분하기 위해서 */
    /** 일반인의 경우 consumer_id 만 존재 */
    consumer_id: number;
    /** 기업 Consumer Identity로 작성된 Request의 경우 corp_id 존재하여야함 */
    corp_id?: number;
    /** 정부 Consumer Identity로 작성된 Request의 경우 orgn_id 존재하여야함 */
    orgn_id?: number;
    head_count: number;
    content: string;
    are_needed?: object;
    are_required?: object;
    end_date?: string;
    address_coordinate?: {
        type: "Point";
        coordinates: [lat: number, lng: number];
    };
    provide_food: boolean;
    provide_trans_exp: boolean;
    prep_material?: object;
    start_time: string;
    end_time: string;
    created_at?: Date;
    updated_at?: Date;
}

// Model attribute
export interface ReqCreateRequest {
    /** 유저가 다양한 Consumer Identity 보유 시, 어떤 role로써 작성했는지 나타내기 위해 필요 */
    role: Exclude<USER_ROLE_ENUM, "student" | "">;
    data?: Joi.extractType<typeof ReqCreateRequestSchema>;
}

export interface ResCreateRequest {
    request_id: number;
}

export interface ReqGetRequest {
    request_id: number;
}

export interface ResGetRequest extends RequestData {}

/** 기업 / 정부 / 개인 등의 마이페이지에서 지금까지 진행한 Request 정보를 알고 싶을 때
 * !IMPORTANT: 정보를 보려고하는 사람과, 보려는 유저의 정보가 어떤 정보인지에 따라서 다른 Response가 필요
 * 1. Mypage 종류는 내 페이지, 타 유저, 정부, 기업 4개의 Type이 존재한다 -> MyPage, ProfilePage, CorpMyPage, OrgnMyPage 3종류
 * 2. 개인 Type의 마이페이지에 렌더링해야하는 정보는 normal type의 Consumer Identity 정보를 포함하여 그 외 정보를 필요로한다
 *      ex)
 *          1. 학생 Identity를 가진 User의 개인 마이페이지는 기본적인 Consumer Identity 를 포함해서 Student Profile 정보를 나타낸다
 *          2. 기업 Identity를 가진 User의 개인 마이페이지는 기본적인 Consumer Identity 를 포함해서 재직중인 Corporation의 프로필 카드 등을 나타낸드
 *
 * RequestCard<ConsumerType, RequestStatus> 타입 지정
 * 1. ConsumerType의 경우 normal | corp | orgn 존재
 * 2. RequestStatus의 경우 POSTED | FINISHED 존재
 *      ex)
 *          1. normal 타입의 Consumer가 올린 Request의 경우: RequestCard<normal, POSTED>
 *          2. corp 타입의 Consumer의 완료된 Request의 경우: RequestCard<corp, FINISHED>
 *
 * StudentProfile 표시할 내용
 * | 유저 타입         | 표시할 RequestCard 정보             | 표시할 RequestCard 정보              |
 * | -------------- | ------------------------------- | ------------------------------- |
 * | normal 또는 학생  | RequestCard<normal, FINISHED>      | RequestCard<normal, FINISHED> 에 대한 리뷰  |
 * | 기업 또는 정부     | RequestCard<corp | orgn, FINISHED> | RequestCard<normal | corp | orgn, FINISHED> 에 대한 리뷰|
 *
 * CorpMyPage & OrgnMyPage 에 표시할 내용
 * | 유저 타입 | 표시할 RequestCard 정보 | 표시할 RequestCard 정보 |
 * | -------------- | ------------------------------- | ------------------------------- |
 * | normal | 회사 프로필 정보 | x |
 * | 기업 또는 정부 | 회사 프로필 정보 & RequestCard<orgn | corp, POSTED | FINISHED> | x |
 * | 학생 | 회사 프로필 정보 & RequestCard<orgn | corp, FINISHED> | 기업 또는 정부에 대해서 학생이 남긴 리뷰 |
 */
export interface ReqAllRequestCard {
    student_id?: number;
    corp_id?: number;
    orgn_id?: number;
}
export interface ResGetAllRequest {
    requests: RequestCard[];
}

// Model attributes

export interface ReqUpdateRequestStatusContract {
    request_id: number;
}

export interface ResUpdateRequestStatusContract {}

export interface ReqUpdateRequestProviderIds {
    chatroom_ids: string[];
}

export interface ResUpdateRequestProviderIds {}
