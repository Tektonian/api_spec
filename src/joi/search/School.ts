import Joi from "@hapi/joi";
import parse from "joi-to-json";

export const ReqSearchSchoolScheme = Joi.object({
    country_code: Joi.string().required().example("jp").description("Country Code such as 'jp' / 'ko'"),
}).description("Request school information --> Being used for school search");

export const ReqSearchSchoolSchemeJson = parse(ReqSearchSchoolScheme);
