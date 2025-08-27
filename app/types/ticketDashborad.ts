export interface Ticket {
    id: string;
    subject: string;
    customer: {
        name: string;
        email: string;
    };
    priority: 'urgent' | 'high' | 'medium' | 'low';
    status: 'open' | 'resolved' | 'inProgress';
    assignedTo: string;
    created: string;
}