export interface Booking {
    id: string;
    name: string;
    court: string;
    date: string;
    amount: number;
    status: 'confirmed' | 'pending';
}