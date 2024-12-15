export const USER_ROLE_ENUM = {
    NOT_VERIFIED: "",   // If empty user didn't verified email
    NORMAL: "normal",   // User verified email
    STUDENT: "student", // User is student
    CORP: "corp",       // User is corporation
    ORGN: "orgn"        // User is organization
} as const

export type USER_ROLE_ENUM = typeof USER_ROLE_ENUM[keyof typeof USER_ROLE_ENUM]

