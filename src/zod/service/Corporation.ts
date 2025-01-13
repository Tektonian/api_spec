import { z } from "zod";
import zodToJsonSchema from "zod-to-json-schema";
import { CountryCodeEnum } from "../../enum";

export const ReqCreateCorpProfileSchema = z.object({
    corp_name: z.string().describe("Name of Corporation"),
    nationality: z.nativeEnum(CountryCodeEnum.COUNTRY_CODE_ENUM).describe("Nationality of Corporation"),
    corp_num: z.number().positive().describe("Corporation Number of Corporation"),

    corp_address: z.string().optional().describe("Real Address of Corporation"),
    biz_type: z.string().optional().describe("Business Type that the Corporation Works on"),
    // TODO: logo_image
    site_url: z.string().optional().describe("Homepage Address of Corporation"),
    phone_number: z.string().describe("Personal contact number. Needed when service has error"),
});

export const ReqCreateCorpProfileSchemaJson = zodToJsonSchema(ReqCreateCorpProfileSchema);
