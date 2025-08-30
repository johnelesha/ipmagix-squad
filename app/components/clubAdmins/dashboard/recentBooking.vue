<template>
    <div class="flex flex-col gap-y-3" :dir="direction">
        <div class="flex justify-between items-center">
            <h2 class="text-base sm:text-lg font-semibold flex items-center gap-x-2">
                <svg width="1.2em" height="1.2em" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6.99992 1.33366V2.66699H10.9999V1.33366H12.3333V2.66699H14.9999C15.1866 2.66699 15.3444 2.73144 15.4733 2.86032C15.6021 2.98921 15.6666 3.14699 15.6666 3.33366V14.0003C15.6666 14.187 15.6021 14.3448 15.4733 14.4737C15.3444 14.6025 15.1866 14.667 14.9999 14.667H2.99992C2.81325 14.667 2.65547 14.6025 2.52659 14.4737C2.3977 14.3448 2.33325 14.187 2.33325 14.0003V3.33366C2.33325 3.14699 2.3977 2.98921 2.52659 2.86032C2.65547 2.73144 2.81325 2.66699 2.99992 2.66699H5.66659V1.33366H6.99992ZM14.3333 8.00033H3.66659V13.3337H14.3333V8.00033ZM5.66659 4.00033H3.66659V6.66699H14.3333V4.00033H12.3333V5.33366H10.9999V4.00033H6.99992V5.33366H5.66659V4.00033Z"
                        fill="#2563EB" />
                </svg>
                {{ t("dashboard.booking") }}
            </h2>
            <NuxtLink
                to="/clubAdmin/booking"
                class="text-xs px-2.5 py-1 gap-y-0 gap-x-1 btn rounded-lg bg-transparent hover:bg-transparent">
                {{ t("dashboard.viewCalendar") }}
                <svg
                    v-if="direction === 'ltr'" xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em"
                    viewBox="0 0 24 24">
                    <path
                        fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" d="M7 7h10m0 0v10m0-10L7 17" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
                    <path
                        fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" d="M17 7H7m0 0v10M7 7l10 10" />
                </svg>
            </NuxtLink>
        </div>

        <div class="mt-3">
            <ul class="list rounded-box">
                <li
                    v-for="booking in sortedBookings" :key="booking.id"
                    class="list-row items-center bg-[#F9FAFB] px-2 sm:px-4 py-5 mb-4">
                    <div class="bg-[#DBEAFE] p-1.5 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 15 15">
                            <path
                                fill="#2563EB" fill-rule="evenodd"
                                d="M.877 7.5a6.623 6.623 0 1 1 13.246 0a6.623 6.623 0 0 1-13.246 0M7.5 1.827a5.673 5.673 0 0 0-4.193 9.494A4.97 4.97 0 0 1 7.5 9.025a4.97 4.97 0 0 1 4.193 2.296A5.673 5.673 0 0 0 7.5 1.827m3.482 10.152A4.02 4.02 0 0 0 7.5 9.975a4.02 4.02 0 0 0-3.482 2.004A5.65 5.65 0 0 0 7.5 13.173c1.312 0 2.52-.446 3.482-1.194M5.15 6.505a2.35 2.35 0 1 1 4.7 0a2.35 2.35 0 0 1-4.7 0m2.35-1.4a1.4 1.4 0 1 0 0 2.8a1.4 1.4 0 0 0 0-2.8"
                                clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div class="flex flex-col gap-y-2">
                        <div class="text-[#09090B] font-semibold">{{ booking.name }}</div>
                        <div class="text-xs text-[#6B7280] font-medium">
                            {{ booking.court }} &nbsp;&nbsp;&nbsp;&nbsp; • &nbsp;
                            {{ formatDate(booking.date) }}
                        </div>
                    </div>
                    <div class="flex flex-col items-center w-18 gap-y-2">
                        <p class="text-[#16A34A]">${{ booking.amount }}</p>
                        <p :class="statusColor(booking.status)">
                            {{ t(`dashboard.${booking.status}`) }}
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from "#i18n";
import { useDirection } from "~/composables/useDirection";
import { useBookingStore } from "~/store/bookingDashboard";
import { storeToRefs } from "pinia";
import type { Booking } from "~/types/bookingDashboard";

const { t } = useI18n();
const { direction } = useDirection();
const bookingStore = useBookingStore();
const { sortedBookings } = storeToRefs(bookingStore);

const formatDate = (date: string) => {
    return new Date(date).toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "Europe/Bucharest",
    });
};

const statusColor = (status: Booking["status"]) => {
    return status === "confirmed" ? "text-[#A6B572]" : "text-[#F19224]";
};
</script>

<style scoped>
.rounded-box li::after {
    border-bottom: none;
}

.rounded-box li:last-child {
    margin-bottom: 5px;
}
</style>
