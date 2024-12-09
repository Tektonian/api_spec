import { MessageContentType } from "./content";

export interface ResMessage {
    _id: string;
    seq: number;
    chatRoomId: string;
    unreadCount: number;
    senderName: string;
    senderId: string;  // hashed uuid;
    contentType: "text";
    content: string;
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
    unreadCount: Number;
    lastSentMessageType: "text" | "image" | "map";
    lastSentMessageContent: String;
    lastSentMessageTime: Date;
    lastMessageSender: String;
}

// Event return value (`returnvalue`)
interface StringfiedBuffer {
    type: 'Buffer';
    data: number[];
}

interface StringfiedJSON {
    
}

export interface UserSentEventReturn extends StringfiedJSON {
    chatroom: string;
    seq: number;
    content_type: string;
    sender_id: StringfiedBuffer;
    image_url: string;
}

export interface UpdateChatRoomReturn extends StringfiedJSON {
    chatUser: never;
    message: any;
}

export interface ResUpdateChatRoom {
    _id: string;
    seq: number;
    chatRoomId: string;
    contentType: "text";
    content: string;
    senderName: string;
    createdAt: Date;
    updatedAt: Date;
}