import Joi from "@hapi/joi";
import parse from "joi-to-json";
import { CountryCodeEnum } from "../../enum";

export const ReqCreateCorpProfileSchema = Joi.object({
    corp_name: Joi.string().required().description("Name of Corporation"),
    nationality: Joi.string()
        .valid(Object.values(CountryCodeEnum.COUNTRY_CODE_ENUM))
        .required()
        .description("Nationality of Corporation"),
    corp_num: Joi.number().required().positive().description("Corporation Number of Corporation"),

    corp_address: Joi.string().description("Real Address of Corporation"),
    biz_type: Joi.string().description("Business Type that the Corporation Works on"),
    // TODO: logo_image
    site_url: Joi.string().uri().description("Homepage Address of Corporation"),
    phone_number: Joi.string().description("Personal contact number. Needed when service has error"),
});

export const ReqCreateCorpProfileSchemaJson = parse(ReqCreateCorpProfileSchema);
