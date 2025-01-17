/**
 * Verification token enum
 */
export const VERIFICATION_TOKEN_ENUM = {
    EMAIL: "email",     // When user sign in
    STUDENT: "student", // When user try to verify him(her)self as a student
    CORP: "corp",       // `` as a corp
    ORGN: "orgn"        // `` as a orgn
} as const

export type VERIFICATION_TOKEN_ENUM = typeof VERIFICATION_TOKEN_ENUM[keyof typeof VERIFICATION_TOKEN_ENUM]