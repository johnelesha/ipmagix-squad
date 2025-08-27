import { defineStore } from "pinia";
import type { Ticket } from "~/types/ticketDashborad";

export const useTicketStore = defineStore("ticket", {
    state: () => ({
        tickets: [
            {
                id: "ticket9",
                subject: "Double booking issue",
                customer: { name: "Liam Brown", email: "liam.brown@example.com" },
                priority: "high" as const,
                status: "open" as const,
                assignedTo: "Clara Davis",
                created: "2025-08-20T20:30:00Z", // Aug 20, 11:30 PM EEST
            },
            {
                id: "ticket1",
                subject: "Booking system not working",
                customer: { name: "John Smith", email: "john.smith@example.com" },
                priority: "high" as const,
                status: "open" as const,
                assignedTo: "Alice Brown",
                created: "2025-08-27T14:30:00Z", // Aug 27, 5:30 PM EEST
            },
            {
                id: "ticket2",
                subject: "Payment issue",
                customer: { name: "Peter Seth", email: "peter.seth@example.com" },
                priority: "urgent" as const,
                status: "inProgress" as const,
                assignedTo: "Bob Wilson",
                created: "2025-08-27T15:45:00Z", // Aug 27, 6:45 PM EEST
            },
            {
                id: "ticket8",
                subject: "Profile picture upload not working",
                customer: { name: "Mia Green", email: "mia.green@example.com" },
                priority: "low" as const,
                status: "open" as const,
                assignedTo: "Nancy Drew",
                created: "2025-08-21T15:00:00Z", // Aug 21, 6:00 PM EEST
            },
            {
                id: "ticket3",
                subject: "Court availability error",
                customer: { name: "John Doe", email: "john.doe@example.com" },
                priority: "medium" as const,
                status: "resolved" as const,
                assignedTo: "Clara Davis",
                created: "2025-08-26T13:15:00Z", // Aug 26, 4:15 PM EEST
            },
            {
                id: "ticket4",
                subject: "Login problem",
                customer: { name: "Emma Johnson", email: "emma.johnson@example.com" },
                priority: "low" as const,
                status: "open" as const,
                assignedTo: "David Lee",
                created: "2025-08-25T16:00:00Z", // Aug 25, 7:00 PM EEST
            },
            {
                id: "ticket5",
                subject: "Email notifications not received",
                customer: { name: "Sophia Miller", email: "sophia.miller@example.com" },
                priority: "medium" as const,
                status: "open" as const,
                assignedTo: "Michael Scott",
                created: "2025-08-24T11:20:00Z", // Aug 24, 2:20 PM EEST
            },
            {
                id: "ticket6",
                subject: "Error on mobile app",
                customer: { name: "Chris Evans", email: "chris.evans@example.com" },
                priority: "urgent" as const,
                status: "inProgress" as const,
                assignedTo: "Sarah Connor",
                created: "2025-08-23T09:10:00Z", // Aug 23, 12:10 PM EEST
            },
            {
                id: "ticket7",
                subject: "Refund request issue",
                customer: { name: "Oliver White", email: "oliver.white@example.com" },
                priority: "high" as const,
                status: "resolved" as const,
                assignedTo: "James Bond",
                created: "2025-08-22T18:40:00Z", // Aug 22, 9:40 PM EEST
            },
            {
                id: "ticket10",
                subject: "Security warning displayed",
                customer: { name: "Ella Wilson", email: "ella.wilson@example.com" },
                priority: "urgent" as const,
                status: "inProgress" as const,
                assignedTo: "David Lee",
                created: "2025-08-19T08:00:00Z", // Aug 19, 11:00 AM EEST
            },
        ] as Ticket[],
    }),
    getters: {
        sortedTickets: (state) => {
            const sorted = [...state.tickets]
                .sort((a, b) => {
                    const dateA = new Date(a.created);
                    const dateB = new Date(b.created);
                    const dateAString = (dateA.toISOString().split("T")[0]) ?? "";
                    const dateBString = (dateB.toISOString().split("T")[0]) ?? "";
                    if (dateAString !== dateBString) {
                        return dateBString.localeCompare(dateAString);
                    }
                    return dateB.getTime() - dateA.getTime();
                })
                .slice(0, 3);
            return sorted;
        },
    },
});
