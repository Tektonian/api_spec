import { z } from "zod";
import { CountryCodeEnum } from "../../enum";
import zodToJsonSchema from "zod-to-json-schema";
export const ReqSearchSchoolScheme = z
    .object({
        country_code: z.nativeEnum(CountryCodeEnum.COUNTRY_CODE_ENUM).describe("Country Code such as 'jp' / 'ko'"),
        q: z.string().optional().describe("Query string for search"),
    })
    .describe("Request school information --> Being used for school search");

export const ReqSearchSchoolSchemeJson = zodToJsonSchema(ReqSearchSchoolScheme);
