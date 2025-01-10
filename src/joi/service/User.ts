import Joi from "@hapi/joi";
import parse from "joi-to-json";
import { COUNTRY_CODE_ENUM } from "../../enum/service/CountryCode";

export const UserSchema = Joi.object({
    username: Joi.string().required(),
    image: Joi.string(),
    email: Joi.string().email().required(),
    nationality: Joi.string().required().valid(Object.values(COUNTRY_CODE_ENUM)),
    working_country: Joi.string().required().valid(Object.values(COUNTRY_CODE_ENUM)),
    location: Joi.string(),
});

export const ReqCreateUserSchemaJson = parse(UserSchema);
