import { z } from "zod";
import { ResGetStudentProfile } from "./Student";
import { RequestCard } from "./Request";
import { ResGetCorpProfile } from "./Corporation";
import { UserSchema } from "../../joi/service/User";
import { COUNTRY_CODE_ENUM } from "../../enum/service/CountryCode";

export interface UserData {
    username: string;
    image?: string;
    nationality?: COUNTRY_CODE_ENUM;
    working_country?: COUNTRY_CODE_ENUM;
    location?: string;
}

export interface ReqGetUserData {}

export interface ResGetUserData extends UserData {}

export interface ReqMyPage {}

export interface ResMyPage {
    // user_profile: UserData;
    user_requests: RequestCard[];
    student_profile?: ResGetStudentProfile<true>;
    student_requests: RequestCard[];
    corp_profile?: ResGetCorpProfile;
    corp_requests: RequestCard[];
    // TODO: Add orgn profile later
    orgn_requests: RequestCard[];
}

export interface ReqUpdateUserProfile extends z.infer<typeof UserSchema> {}
{
}
export interface ResUpdateUserProfile extends UserData {}
