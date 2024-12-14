import { Tspec } from "tspec";

type HashedUserIdStr = string;

export interface ResChatUser {
    user_id: HashedUserIdStr; // Stringfied Hash
    user_name: string;
    email: string;
    image_url: string;
}

type ParticipantType = {
    user_name: string;
    user_id: HashedUserIdStr;
    email: string;
    image_url: string;
}

export interface ResChatRoom {
    title: string;
    chatRoomId: string;
    consumer: ParticipantType;
    participants: ParticipantType[];
    messageSeq: number;
    lastSenderId: HashedUserIdStr;
    lastMessage: string;
    lastSentTime: Date;
}


export interface ReqCreateChatRoom {
    request_id: number;
}

export interface ResCreateChatRoom {
    status: string;
}

