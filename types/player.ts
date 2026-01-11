export enum AccountStatus {
    ACTIVE = "active",
    BANNED = "banned",
    FLAGGED = "flagged",
    DEACTIVATED = "deactivated",
    WHALE = "whale"
};

export interface RelatedAccounts {
    id: string;
    username: string;
    email: string;
    relationType: "IP" | "HardwareID" | "Email" | "Payment Method";
    lastLogin: Date;
    status: AccountStatus;
};

export interface PlayerProfile {
    //Primary Identifiers
    id: string;
    username: string;
    email: string;
    status: AccountStatus;

    //Game Progression
    level: number;
    experience: number;
    vipLevel: number;
    vipExperience: number;

    //Currencies & Economy
    tickets: number;
    coins: number;
    powerUps: number;
    keys: number;

    //Metadata (The one click targets)
    metadata: {
        avatars: string[]; //array of avatarIDs/URLs
        stamps: string[]; //array of stampIDs
        notes: string; //internal CSR notes field
    };

    //Device & Security
    security: {
        deviceModel: string;
        ipHistory: string[];
        hardwareIDs: string[];
        linkedSocials: {
            platform: 'Facebook' | 'Microsoft' | 'Google' | 'Discord';
            externalId: string;
        }[];
    };

    //Financials 
    billing: {
        totalPurchases: number;
        purchaseHistory: {
            transactionId: string;
            amount: number;
            date: Date;
            item: string;
        }[];
    };

    //System Dates
    createdAt: Date;
    updatedAt: Date;
    lastLogin: Date;
};