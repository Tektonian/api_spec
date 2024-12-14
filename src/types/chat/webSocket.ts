import { MessageContentType } from "./content";

const CONTENT_TYPE_ENUM = {
    TEXT: "text",
    IMAGE: "image",
    FILE: "file",
    MAP: "map",
    ALARM: "alarm",
} as const

/**
 * Enum for content type
 * @enum {number}
 */
export type CONTENT_TYPE_ENUM = typeof CONTENT_TYPE_ENUM[keyof typeof CONTENT_TYPE_ENUM];



export interface ResMessage{
    _id: string;
    seq: number;
    chatRoomId: string;
    unreadCount: number;
    senderName: string;
    senderId: string;  // hashed uuid;
    contentType: CONTENT_TYPE_ENUM;
    direction: "outgoing" | "inbound";
    content: string;
    data?: string;
    url?: string;
    createdAt: Date;
    updatedAt: Date;
}


export interface ReqSendMessage {
    _id: string;
    senderId: string;
    chatRoomId: string;
    message: MessageContentType;
}

export interface ReqTryJoin {
    id: string;
    // last message sequence number of user device
    // last sequence may different by devices
    deviceLastSeq: number;
    chatRoomId: string;
}

export interface ResTryJoin {
    messages: ResMessage[];
    lastReadSequences: number[];
}

export interface ReqUpdateLastRead {
    lastSeq: number;
}

export interface AckLastSeq {
    lastSeq: number;
    chatRoomId: string;
}

export interface ResSomeoneSent {
    id: string;
    lastReadSeq: number;
}

export interface ResMessages {
    messages: ResMessage[];
}

export interface ResSSEUnread {
    unreadCount: number;
    lastSentMessageType: CONTENT_TYPE_ENUM;
    lastSentMessageContent: string;
    lastSentMessageTime: Date;
    lastMessageSender: string;
}

// Event return value (`returnvalue`)
interface StringfiedBuffer {
    type: 'Buffer';
    data: number[];
}


export interface UserSentEventReturn {
    chatroom: string;
    seq: number;
    content_type: CONTENT_TYPE_ENUM;
    content: string;
    url: string;
    _id: string;
    sender_id: StringfiedBuffer;
    image_url: string;
    created_at: Date;
    updated_at: Date;
}



export interface ResUpdateChatRoom {
    _id: string;
    seq: number;
    chatRoomId: string;
    contentType: CONTENT_TYPE_ENUM;
    content: string;
    createdAt: Date;
    updatedAt: Date;
}