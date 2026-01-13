export interface QueueItem {
    id: string;
    player: {
        name: string;
        email: string;
        avatarUrl: string;
        appVersion: string;
    };

    message: {
        text: string; //truncated to 150 characters
        timestamp: Date;
        priority: 'low' | 'medium' | 'high' | 'urgent';
        status: 'unread' | 'read' | 'snoozed';
    };
}