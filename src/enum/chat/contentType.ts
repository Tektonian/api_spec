const CONTENT_TYPE_ENUM = {
    TEXT: "text",
    IMAGE: "image",
    FILE: "file",
    MAP: "map",
    ALARM: "alarm",
} as const;

/**
 * Enum for content type
 * @enum {number}
 */
export type CONTENT_TYPE_ENUM = (typeof CONTENT_TYPE_ENUM)[keyof typeof CONTENT_TYPE_ENUM];
