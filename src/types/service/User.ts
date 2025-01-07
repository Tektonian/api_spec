import "joi-extract-type";
import * as Joi from "@hapi/joi";
import { COUNTRY_CODE_ENUM } from "../../enum/service/CountryCode";
import { ResGetStudentProfile } from "./Student";
import { RequestCard } from "./Request";
import { ResGetCorpProfile } from "./Corporation";
import { ReqCreateUserSchema } from "../../joi/service/User";

interface UserData {
    username: string;
    image: string;
    nationality: COUNTRY_CODE_ENUM;
    working_country: COUNTRY_CODE_ENUM;
}

export interface ReqGetUserData {}

export interface ResGetUserData extends UserData {}

export interface ReqMyPage {}

export interface ResMyPage {
    user_profile: UserData;
    student_profile: ResGetStudentProfile<true>;
    student_requests: RequestCard[];
    corp_profile: ResGetCorpProfile;
    corp_requests: RequestCard[];
    // TODO: Add orgn profile later
    orgn_requests: RequestCard[];
}

export interface ReqUpdateUserProfile extends UserData {}
export interface ResUpdateUserProfile extends UserData {}
