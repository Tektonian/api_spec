import { z } from "zod";
import zodToJsonSchema from "zod-to-json-schema";
import { COUNTRY_CODE_ENUM } from "../../enum/service/CountryCode";
import { CONSUMER_ENUM } from "../../enum/service/Consumer";

export const ReqCreateRequestSchema = z.object({
    data: z.object({
        title: z.string(),
        reward_price: z.number().min(1),
        currency: z.nativeEnum(COUNTRY_CODE_ENUM).describe("국가 코드 - 화폐 단위로 변경하는 데이터 후처리 필요"),
        address: z.string(),
        head_count: z.number().min(1),
        content: z.string(),
        start_date: z.string().date().describe("의뢰 수행을 시작하는 날짜"),
        end_date: z
            .string()
            .date()
            .describe("의뢰 수행이 종료되는 날짜 - 이때까지 수행되지 않으면 환불 후 수행 실패 판정"),
        address_coordinate: z.object({
            lat: z.number().default(0),
            lng: z.number().default(0),
        }),
        provide_food: z.boolean().default(false),
        provide_trans_exp: z.boolean().default(false),
        are_needed: z.array(z.string()),
        are_required: z.array(z.string()),
        prep_material: z.array(z.string()),
        start_time: z
            .string()
            .time()
            .describe(
                "Type: HH:MM:SS / 의뢰 수행이 시작되는 시간 - 필요 시간이 없는 경우에는 의무사항 아님 (e.g. 번역)",
            ),
        end_time: z.string().time(),
    }),
    role: z
        .nativeEnum(CONSUMER_ENUM)
        .describe("유저가 다양한 Consumer Identity 보유 시, 어떤 role로써 작성했는지 나타내기 위해 필요"),
});

// TODO: Fill later
export const ReqAllRequestCardSchema = z.object({ id: z.string() });

export const ReqAllRequestCardSchemaJSON = zodToJsonSchema(ReqAllRequestCardSchema);
export const ReqCreateRequestSchemaJSON = zodToJsonSchema(ReqCreateRequestSchema);
