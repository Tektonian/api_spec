
type IdentityTypes = "student" | "corp" | "orgn"

type CorpId = string;
type OrgnId = string;
type StudentId = string;

export interface ReqCallbackIdentityVerify {
    token: string;
    verifyEmail: string;
    phoneNumber: string;
    IdentityId: CorpId | OrgnId | StudentId; 
    type: IdentityTypes;
}

export interface ResCallbackIdentityVerify {
    status: string;
}

export interface ReqIdentityVeraify {
    verifyEmail: string;
    type: IdentityTypes; 
}

export interface ResIdentityVerify{
    status: string;
}