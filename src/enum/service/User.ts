/**
 * User Role enum
 */
export const USER_ROLE_ENUM = {
    NOT_VERIFIED: "", // If empty user didn't verified email
    NORMAL: "normal", // User verified email
    STUDENT: "student", // User is student
    CORP: "corp", // User is corporation
    ORGN: "orgn", // User is organization
} as const;

/**
 * User Gender enum
 * There is probability that we might need to chech gender of other users, not just students.
 * So gender is written down on user, not student.
 */
export const USER_GENDER_ENUM = {
    MALE: 0,
    FEMALE: 1,
} as const;

export type USER_ROLE_ENUM = (typeof USER_ROLE_ENUM)[keyof typeof USER_ROLE_ENUM];
export type USER_GENDER_ENUM = (typeof USER_GENDER_ENUM)[keyof typeof USER_GENDER_ENUM];
