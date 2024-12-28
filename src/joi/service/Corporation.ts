import Joi from "@hapi/joi";
import parse from "joi-to-json";

const EvaluationScore = Joi.number().required().min(0).max(10);

export const ReqCreateCorpProfileSchema = Joi.object({
    corp_name: Joi.string().required().description("Name of Corporation"),
    nationality: Joi.string().required().description("Nationality of Corporation"),
    corp_num: Joi.number().required().positive().description("Corporation Number of Corporation"),

    corp_address: Joi.string().description("Real Address of Corporation"),
    biz_type: Joi.string().description("Business Type that the Corporation Works on"),
    // TODO: logo_image
    site_url: Joi.string().uri().description("Homepage Address of Corporation"),
});

export const ResGetCorpProfileSchema = Joi.object({
    corp: Joi.object({
        corp_id: Joi.number().required().description("Id of Corporation"),
        corp_name: Joi.string().required().description("Name of Corporation"),
        nationality: Joi.string().required().description("Nationality of Corporation"),
        corp_num: Joi.number().required().positive().description("Corporation Number of Corporation"),

        corp_domain: Joi.string().domain().description("Domain Address of Corporation"),
        ceo_name: Joi.string().description("CEO name of Corporation"),
        corp_address: Joi.string().description("Real Address of Corporation"),
        phone_number: Joi.string().description("Phone Number for Contacting Corporation"),
        biz_num: Joi.number().positive().description("Business Number of Corporation"),
        biz_started_at: Joi.string().isoDate().description("Date of Business Started"),
    }),
});

export const ReqCreateCorpProfileSchemaJson = parse(ReqCreateCorpProfileSchema);
