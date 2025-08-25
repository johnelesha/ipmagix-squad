import { defineStore } from "pinia";
import type { Notification } from "~/types/notification";

export const useNotificationsStore = defineStore("notifications", {
    state: () => ({
        notifications: [
            {
                severity: "medium",
                title: "User Access Issue",
                description:
                    "Multiple users reported access issues with the platform. Please investigate login errors.",
                time: new Date("2025-08-25T13:22:00+03:00"),
            },
            {
                severity: "high",
                title: "System Downtime Alert",
                description:
                    "System downtime detected in main server cluster. Immediate attention required to restore services.",
                time: new Date("2025-08-25T13:17:00+03:00"),
            },
            {
                severity: "low",
                title: "Scheduled Maintenance",
                description:
                    "Scheduled maintenance planned for next weekend. No action required at this time.",
                time: new Date("2025-08-25T13:12:00+03:00"),
            },
            {
                severity: "high",
                title: "Security Breach Detected",
                description:
                    "Potential security breach detected. Immediate action required.",
                time: new Date("2025-08-25T13:07:00+03:00"),
            },
            {
                severity: "medium",
                title: "Performance Degradation",
                description: "System performance is degraded. Check server loads.",
                time: new Date("2025-08-25T13:02:00+03:00"),
            },
            {
                severity: "low",
                title: "Update Available",
                description: "A new update is available for the application.",
                time: new Date("2025-08-25T12:57:00+03:00"),
            },
        ] as Notification[],
    }),
    getters: {
        sortedNotifications(state): Notification[] {
            return state.notifications
                .sort((a, b) => b.time.getTime() - a.time.getTime())
                .slice(0, 3);
        },
    },
});
