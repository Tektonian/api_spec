import { MessageContentType } from "./content";

export interface ResMessage{
    _id: string;
    seq: number;
    chatRoomId: string;
    unreadCount: number;
    senderName: string;
    senderId: string;  // hashed uuid;
    contentType: "text" | "image" | "file" | "map";
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
    lastSentMessageType: "text" | "image" | "map" | "file";
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
    content_type: string;
    sender_id: StringfiedBuffer;
    image_url: string;
}

export interface UpdateChatRoomReturn {
    chatUser: never;
    message: any;
}

export interface ResUpdateChatRoom {
    _id: string;
    seq: number;
    chatRoomId: string;
    contentType: "text" | "image" | "file" | "map";
    content: string;
    senderName: string;
    createdAt: Date;
    updatedAt: Date;
}