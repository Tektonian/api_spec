/**
 * Exam level type
 */
export const EXAM_LEVEL_ENUM = {
    LOW: 1,
    MIDDLE: 2,
    TOP: 3,
} as const;

export type EXAM_LEVEL_ENUM = (typeof EXAM_LEVEL_ENUM)[keyof typeof EXAM_LEVEL_ENUM];

/**
 * Exam type
 */
export const EXAM_TYPE = {
    LEVEL: "level",
    SCORE: "score",
} as const;

export type EXAM_TYPE = (typeof EXAM_TYPE)[keyof typeof EXAM_TYPE];

/**
 * Exam id
 */
export const EXAM_ID = {
    TOPIK: 0,
    HANGUL: 1,
    JLPT: 2,
    JPT: 3,
    IELTS: 4,
    TOEFL: 5,
    TOEIC: 6,
};

export type EXAM_ID = (typeof EXAM_ID)[keyof typeof EXAM_ID];
