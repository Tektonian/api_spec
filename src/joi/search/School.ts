import Joi from "@hapi/joi";

export const ReqSearchSchoolScheme = Joi.object({
    country_code: Joi.string().required(),
});
