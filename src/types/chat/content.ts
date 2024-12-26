type HashedUserIdStr = string;

interface ChatMessageBase {
    _id: string; // Id should set by server-side. Before that tag Id with randomly generated string
    seq: number;
    senderId: HashedUserIdStr;
    unreadCount: number;
    direction: "outgoing" | "inbound";
    createdAt?: Date;
    updatedAt?: Date;
}

interface TextContent {
    contentType: "text";
    content: string;
}

interface AlarmContent {
    contentType: "alarm";
    content: string;
}

interface ImageContent {
    contentType: "image";
    url: string;
    data: ArrayBuffer;
}

interface FileContent {
    contentType: "file";
    url: string;
    data: ArrayBuffer;
}

interface MapContent {
    contentType: "map";
    content: {
        lat: number;
        lng: number;
    };
}

export type MessageContentType = TextContent | FileContent | MapContent | ImageContent | AlarmContent;

export type MessageContent = MessageContentType & ChatMessageBase;
