type MessageStates = "SENDING" | "SENT" | "UNREAD" | "READ";

interface ChatMessageBase {
    _id: string; // Id should set by server-side. Before that tag Id with randomly generated string
    seq: number;
    unreadCount: number;
    senderName?: string;
    direction: "outgoing" | "inbound";
    createdAt?: Date;
    updatedAt?: Date;
}

export interface TextContent extends ChatMessageBase {
    contentType: "text";
    content: string;
}

export interface ImageContent extends ChatMessageBase {
    contentType: "image";
    url: string;
    data: ArrayBuffer;
}

export interface FileContent extends ChatMessageBase {
    contentType: "file";
    url: string;
    data: ArrayBuffer;
}

export interface MapContent extends ChatMessageBase {
    contentType: "map";
    content: string;
}

export type MessageContentType =
    | TextContent
    | FileContent
    | MapContent
    | ImageContent;
