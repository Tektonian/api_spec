/**
 * Academic attending status
 */
export const ACADEMIC_ATTENDING_ENUM = {
    NOT_ATTENDING: 0,
    IS_ATTENDING: 1,
} as const;

export type ACADEMIC_ATTENDING_ENUM = (typeof ACADEMIC_ATTENDING_ENUM)[keyof typeof ACADEMIC_ATTENDING_ENUM];

/**
 * Academic Degree type
 */

export const ACADEMIC_DEGREE_ENUM = {
    BACHELOR: 0,
    MASTER: 1,
    DOCTOR: 2,
};

export type ACADEMIC_DEGREE_ENUM = (typeof ACADEMIC_DEGREE_ENUM)[keyof typeof ACADEMIC_DEGREE_ENUM];
/**
 * School status type
 */
export const ACADEMIC_STATUS_ENUM = {
    /** Student graduated the school */
    GRADUATED: 0,
    /** Student is in progress of the school*/
    PROGRESSING: 1,
    /** Student is in a leave of absence from school */
    ABSENCE: 2,
} as const;

export type ACADEMIC_STATUS_ENUM = (typeof ACADEMIC_STATUS_ENUM)[keyof typeof ACADEMIC_STATUS_ENUM];
