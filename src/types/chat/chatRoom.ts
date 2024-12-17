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
    chatRoomId: string;
    consumer: ParticipantType;
    participants: ParticipantType[];
    messageSeq: number;
    lastSenderId: HashedUserIdStr;
    lastMessage: string;
    lastSentTime: Date;
}
