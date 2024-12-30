import Joi from "@hapi/joi";
import parse from "joi-to-json";

export const ReqCreateCorpProfileSchema = Joi.object({
    corp_name: Joi.string().required().description("Name of Corporation"),
    nationality: Joi.string().required().description("Nationality of Corporation"),
    corp_num: Joi.number().required().positive().description("Corporation Number of Corporation"),

    corp_address: Joi.string().description("Real Address of Corporation"),
    biz_type: Joi.string().description("Business Type that the Corporation Works on"),
    // TODO: logo_image
    site_url: Joi.string().uri().description("Homepage Address of Corporation"),
});

export const ReqCreateCorpProfileSchemaJson = parse(ReqCreateCorpProfileSchema);
