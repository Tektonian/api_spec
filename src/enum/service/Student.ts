/**
 * School status type
 */
export const SCHOOL_STATUS_ENUM = {
    /** Student graduated the school */
    GRADUATED: 0,
    /** Student is in progress of the school*/
    PROGRESSING: 1,
    /** Student is in a leave of absence from school */
    ABSENCE: 2,
} as const;

export type SCHOOL_STATUS_ENUM = (typeof SCHOOL_STATUS_ENUM)[keyof typeof SCHOOL_STATUS_ENUM];
