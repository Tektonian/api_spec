import Joi from "@hapi/joi";
import parse from "joi-to-json";
import { COUNTRY_CODE_ENUM } from "../../global/CountryCode";
import { CONSUMER_ENUM } from "../../enum/service/Consumer";

export const ReqCreateRequestSchema = Joi.object({
    data: Joi.object({
        title: Joi.string().required(),
        reward_price: Joi.number().min(1).required(),
        currency: Joi.string()
            .required()
            .valid(...[Object.values(COUNTRY_CODE_ENUM)])
            .description("국가 코드 - 화폐 단위로 변경하는 데이터 후처리 필요"),
        address: Joi.string(),
        head_count: Joi.number().required().min(1),
        content: Joi.string().required(),
        start_date: Joi.date().iso().required().description("의뢰 수행을 시작하는 날짜"),
        end_date: Joi.date()
            .iso()
            .required()
            .description("의뢰 수행이 종료되는 날짜 - 이때까지 수행되지 않으면 환불 후 수행 실패 판정"),
        address_coordinate: Joi.object({
            lat: Joi.number(),
            lng: Joi.number(),
        }),
        provide_food: Joi.boolean().required(),
        provide_trans_exp: Joi.boolean().required(),
        are_needed: Joi.array().items(Joi.string()),
        are_required: Joi.array().items(Joi.string()),
        prep_material: Joi.array().items(Joi.string()),
        start_time: Joi.date()
            .iso()
            .description("의뢰 수행이 시작되는 시간 - 필요 시간이 없는 경우에는 의무사항 아님 (e.g. 번역)"),
        end_time: Joi.date().iso(),
    }),
    role: Joi.string()
        .required()
        .valid([...Object.values(CONSUMER_ENUM)]),
});

export const ReqAllRequestCardSchema = Joi.object({
    student_id: Joi.number().positive(),
    corp_id: Joi.number().positive(),
    orgn_id: Joi.number().positive(),
})
    .keys()
    .oxor("student_id", "corp_id", "orgn_id")
    .description("only one field is allowed but none are required");

export const ReqAllRequestCardSchemaJSON = parse(ReqAllRequestCardSchema);
export const ReqCreateRequestSchemaJSON = parse(ReqCreateRequestSchema);
