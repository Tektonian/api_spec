import { Tspec } from "tspec";

type HashedUserIdStr = string; // Stringfied Hash

type ParticipantType = {
    user_name: string;
    user_id: HashedUserIdStr;
    email: string;
    image_url: string;
};

export interface ResChatRoom {
    title: string;
    requestId: number;
    chatRoomId: string;
    consumer: ParticipantType;
    participants: ParticipantType[];
    messageSeq: number;
    lastSenderId: HashedUserIdStr;
    lastMessage: string;
    lastSentTime: Date;
}

export interface ResRequest {
    requestId: number;
    title: string;
    image: string;
}
