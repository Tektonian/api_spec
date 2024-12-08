import { Types } from "mongoose";
import type { Hash } from 'crypto'


export interface ResChatUser {
    user_id: string; // Stringfied Hash
    username: string;
    email: string;
    image_url: string;
}

export interface ResChatRoom {
    chatRoomId: string;
    consumerName: string;
    providerNames: string[];
    participant_ids: Types.UUID[];
    messageSeq: number;
    lastSender: string;
    lastMessage: string;
    lastSentTime: Date;
}



