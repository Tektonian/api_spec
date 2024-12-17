import { Tspec } from "tspec";

export interface ReqCreateChatRoom {
    request_id: number;
}

export interface ResCreateChatRoom {
    /**
     * @deprecated
     */
    status: string;
}

export interface ReqUploadImage {}

export interface ResUploadImage {}

export interface ReqCheckAttending {
    request_id: number;
}
export interface ResCheckAttending {}
