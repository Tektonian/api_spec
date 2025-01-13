import { z } from "zod";
import zodToJsonSchema from "zod-to-json-schema";
import { COUNTRY_CODE_ENUM } from "../../enum/service/CountryCode";

export const UserSchema = z.object({
    username: z.string(),
    image: z.string().optional(),
    email: z.string().email(),
    nationality: z.nativeEnum(COUNTRY_CODE_ENUM),
    working_country: z.nativeEnum(COUNTRY_CODE_ENUM),
    location: z.string().optional(),
});

export const ReqCreateUserSchemaJson = zodToJsonSchema(UserSchema);
