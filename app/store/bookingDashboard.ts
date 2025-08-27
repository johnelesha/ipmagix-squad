import { defineStore } from "pinia";
import type { Booking } from "~/types/bookingDashboard";

export const useBookingStore = defineStore("booking", {
    state: () => ({
        bookings: [
            {
                id: "booking1",
                name: "Dio Lupa",
                court: "Tennis Court A",
                date: "2025-01-22T08:50:00Z", // Jan 22, 11:50 AM EEST
                amount: 80,
                status: "confirmed" as const,
            },
            {
                id: "booking2",
                name: "Jane Smith",
                court: "Tennis Court A",
                date: "2025-01-23T09:30:00Z", // Jan 23, 12:30 PM EEST
                amount: 60,
                status: "confirmed" as const,
            },
            {
                id: "booking3",
                name: "John Doe",
                court: "Tennis Court A",
                date: "2025-01-26T10:00:00Z", // Jan 21, 1:00 PM EEST
                amount: 70,
                status: "pending" as const,
            },
            {
                id: "booking4",
                name: "William Brown",
                court: "Tennis Court B",
                date: "2025-01-24T11:00:00Z", // Jan 24, 2:00 PM EEST
                amount: 90,
                status: "confirmed" as const,
            },
            {
                id: "booking5",
                name: "John Smith",
                court: "Tennis Court C",
                date: "2025-01-25T12:00:00Z", // Jan 25, 3:00 PM EEST
                amount: 50,
                status: "pending" as const,
            },
            {
                id: "booking6",
                name: "Alice Johnson",
                court: "Tennis Court A",
                date: "2025-01-26T13:00:00Z", // Jan 26, 4:00 PM EEST
                amount: 75,
                status: "confirmed" as const,
            },
        ] as Booking[],
    }),
    getters: {
        sortedBookings: (state) => {
            const sorted = [...state.bookings]
                .sort((a, b) => {
                    const dateA = new Date(a.date);
                    const dateB = new Date(b.date);
                    const dateAString = dateA.toISOString().split("T")[0];
                    const dateBString = dateB.toISOString().split("T")[0];
                    if (dateAString !== dateBString) {
                        return (dateBString ?? "").localeCompare(dateAString ?? "");
                    }
                    return dateB.getTime() - dateA.getTime();
                })
                .slice(0, 3);
            return sorted;
        },
    },
});
