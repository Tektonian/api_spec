import { Tspec } from "tspec";
export interface ChatUserModel {
    _id: string; // Object id
    user_id: Tspec.UuidString;
    username: string;
    nationality: string;
    multilingual: string[];
    user_name_glb: Record<string, string>;
    email: string;
    image_url: string;
}

export interface ChatRoomModel {
    request_id: number;
    consumer_id: Tspec.UuidString; // UUID
    participant_ids: Tspec.UuidString[]; // UUID[]
    message_seq: number;
    title: string;
}

export interface ChatContent {
    seq: number;
    content_type: "text";
    content: string;
    sender_id: string;
    image_url: string;
}