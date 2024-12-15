/**
 * Request status type
 */
export const REQUEST_STATUS_ENUM = {
    /** consumer wrote a request but not paid */
    POSTED: 0,
    /** consumer paid for a request */
    PAID: 1,
    /** No provider(s) contracted with a consumer */
    OUTDATED: 2,
    /** provider(s) contracted with a consumer */
    CONTRACTED: 3,
    /** work has been done! */
    FINISHED: 4,
    /** Contraction didn’t work properly */
    FAILED: 5,
} as const

/**
 * Enum for request status
 */
export type REQUEST_STATUS_ENUM = typeof REQUEST_STATUS_ENUM[keyof typeof REQUEST_STATUS_ENUM];
