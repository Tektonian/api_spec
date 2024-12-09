import { Tspec } from "tspec";

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

    /**
     * @deprecated
     * moved to participants
     */
    participant_ids: string[];

    participants: any[];
    messageSeq: number;
    lastSender: string;
    lastMessage: string;
    lastSentTime: Date;
}



