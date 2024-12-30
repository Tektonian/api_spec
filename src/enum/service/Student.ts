/**
 * School Degree type
 */

export const SCHOOL_DEGREE_ENUM = {
    BACHELOR: 0,
    MASTER: 1,
    DOCTOR: 2,
};

export type SCHOOL_DEGREE_ENUM = (typeof SCHOOL_DEGREE_ENUM)[keyof typeof SCHOOL_DEGREE_ENUM];
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
