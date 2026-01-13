import { QueueItem } from "../types/queue";
import { PlayerProfile, AccountStatus } from "../types/player";

export const MOCK_PLAYERS: PlayerProfile[] = [
    {
        id: "88291-X",
        username: "Test_Player",
        email: "testplayer@test.com",
        status: AccountStatus.WHALE,
        level: 125,
        experience: 450000,
        vipLevel: 10,
        vipExperience: 5000,
        economy: { tickets: 45, coins: 120000, powerUps: 12, keys: 5 },
        metadata: {
            avatars: ["v_102", "v_505"],
            stamps: ["s_beta", "s_winter_24"],
            notes: "Player reported technical glitch in level 4. Gifted 5 keys as compensation",
        },
        security: {
            deviceModel: "Samsung 25 Ultra",
            ipHistory: ["192.168.1.1", "104.22.11.5"],
            hardwareIDs: ["HW-992-AX-01"],
            linkedSocials: [{ platform: 'Discord', externalId: 'test_user#1234' }]
        },
        billing: {
            totalPurchases: 1450.50,
            purchaseHistory: [
                { transactionId: "TX_101", amount: 99.99, date: new Date(), item: "Vault of Coins" }
            ]
        },
        createdAt: new Date('01-01-2023'),
        updatedAt: new Date(),
        lastLogin: new Date()
    },
];

export const MOCK_QUEUE: QueueItem[] = [
    {
        id: "MSG-001",
        player: {
            name: "Test_Player",
            email: "testplayer@test.com",
            avatarUrl: "/avatars/player1.png",
            appVersion: "v4.5.2"
        },
        message: {
            text: "I purchased the 500 coin pack but haven't received it yet. Can you check my transaction? I've already tried restarting the app several times.",
            timestamp: new Date(),
            priority: 'high',
            status: 'unread',
        },
    },
    {
        id: "MSG-002",
        player: {
            name: "Test_Player1",
            email: "testplayer1@test.com",
            avatarUrl: "/avatars/player2.png",
            appVersion: "v4.5.1"
        },
        message: {
            text: "Gimme Free Coins",
            timestamp: new Date(),
            priority: 'low',
            status: 'snoozed',
        },
    },
];