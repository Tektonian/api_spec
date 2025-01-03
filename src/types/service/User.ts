import "joi-extract-type";
import * as Joi from "@hapi/joi";
import { USER_GENDER_ENUM } from "../../enum/service/User";
import { COUNTRY_CODE_ENUM } from "../../enum/service/CountryCode";
import { ReqCreateUserSchema } from "../../joi/service/User";

interface UserData {
    username: string;
    email: string;
    // gender?
    nationality: COUNTRY_CODE_ENUM;
    working_country: COUNTRY_CODE_ENUM;
    roles: string[];
    // image
}

export interface ReqGetUserData {}

export interface ResGetUserData extends UserData {}

export interface ReqCreateUserData extends Joi.extractType<typeof ReqCreateUserSchema> {}

export interface ResCreateUserData {}
