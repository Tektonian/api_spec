import { MessageContentType } from "./content";
import { CONTENT_TYPE_ENUM } from "../../enum/chat/contentType";
import { ResChatRoom, ResRequest } from "./chatRoom";

export interface ResMessage {
    _id: string;
    seq: number;
    chatRoomId: string;
    unreadCount: number;
    senderName: string;
    senderId: string; // hashed uuid;
    contentType: CONTENT_TYPE_ENUM;
    direction: "outgoing" | "inbound" | "alarm";
    content: string;
    data?: string;
    url?: string;
    createdAt: Date;
    updatedAt: Date;
}

/**
 * When user connected with chat server (when enterted chat page)
 */
interface ReqConnect {} // No request
export interface ResConnect {
    id: string; // Chat user id (ObjectId of ChatUser schema in MongoDB)
}

/**
 * User send message
 */
export interface ReqSendMessage {
    _id: string;
    senderId: string;
    chatRoomId: string;
    message: MessageContentType;
}
interface ResSendMessage {} // No response

/**
 * When user tried to join a chatroom
 */
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

/**
 * User request back-end server to update last_read_sequence
 */
export interface ReqUpdateLastRead {
    lastSeq: number;
}
interface ResUpdateLastRead {} // No respond

/**
 * User sent event
 */
export interface UserSentEventReturn {
    chatroom: string;
    seq: number;
    content_type: CONTENT_TYPE_ENUM;
    content: string;
    url: string;
    _id: string;
    sender_id: StringfiedBuffer;
    created_at: Date;
    updated_at: Date;
}

export interface ResSomeoneSent {
    id: string;
    lastReadSeq: number;
}

/**
 * SSE event return
 */
export interface ResSSEUnread {
    unreadCount: number;
    lastSentMessageType: CONTENT_TYPE_ENUM;
    lastSentMessageContent: string;
    lastSentMessageTime: Date;
    lastMessageSender: string;
}

// Event return value (`returnvalue`)
interface StringfiedBuffer {
    type: "Buffer";
    data: number[];
}

export interface ResRefreshChatRoom {
    chatRooms: ResChatRoom[];
    requests: ResRequest[];
}
