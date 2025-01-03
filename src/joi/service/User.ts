import Joi from "@hapi/joi";
import parse from "joi-to-json";
import { COUNTRY_CODE_ENUM } from "../../enum/service/CountryCode";
import { CONSUMER_ENUM } from "../../enum/service/Consumer";

export const ReqCreateUserSchema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    nationality: Joi.string().required().allow(Object.values(COUNTRY_CODE_ENUM)),
    working_country: Joi.string().required().allow(Object.values(COUNTRY_CODE_ENUM)),
    roles: Joi.string()
        .required()
        .valid([...Object.values(CONSUMER_ENUM)]),
});

export const ReqCreateUserSchemaJson = parse(ReqCreateUserSchema);
