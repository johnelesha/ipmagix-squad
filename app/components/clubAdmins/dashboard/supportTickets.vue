<template>
    <div class="flex flex-col gap-y-3" :dir="direction">
        <div class="flex justify-between items-center">
            <h2 class="text-base sm:text-lg font-semibold flex items-center gap-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 56 56">
                    <path
                        fill="#DC2626" d="M28 51.906c13.055 0 23.906-10.828 23.906-23.906c0-13.055-10.875-23.906-23.93-23.906C14.899 4.094 4.095 14.945 4.095 28c0 13.078 10.828 23.906 23.906 23.906m0-3.984C16.937 47.922 8.1 39.062 8.1 28c0-11.04 8.813-19.922 19.876-19.922c11.039 0 19.921 8.883 19.945 19.922c.023 11.063-8.883 19.922-19.922 19.922m-.023-15.68c1.124 0 1.757-.633 1.78-1.851l.352-12.375c.024-1.196-.914-2.086-2.156-2.086c-1.266 0-2.156.867-2.133 2.062l.305 12.399c.023 1.195.68 1.851 1.852 1.851m0 7.617c1.335 0 2.53-1.078 2.53-2.437c0-1.383-1.171-2.438-2.53-2.438c-1.383 0-2.532 1.078-2.532 2.438c0 1.336 1.172 2.437 2.532 2.437" />
                </svg>
                {{ t("sidebar.supportTickets") }}
            </h2>
            <NuxtLink to="/clubAdmin/support" class="text-xs px-2.5 py-1 gap-y-0 gap-x-1 btn rounded-lg bg-transparent hover:bg-transparent">
                {{ t("dashboard.managed") }}
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
                <li v-for="ticket in sortedTickets" :key="ticket.id" class="list-row px-2 sm:px-4 items-center bg-[#F9FAFB] mb-8">
                    <div :class="getPriorityColor(ticket.priority, 'bg')" class="p-2 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 56 56">
                            <path
                                :fill="getPriorityColor(ticket.priority, 'fill')"
                                d="M28 51.906c13.055 0 23.906-10.828 23.906-23.906c0-13.055-10.875-23.906-23.93-23.906C14.899 4.094 4.095 14.945 4.095 28c0 13.078 10.828 23.906 23.906 23.906m0-3.984C16.937 47.922 8.1 39.062 8.1 28c0-11.04 8.813-19.922 19.876-19.922c11.039 0 19.921 8.883 19.945 19.922c.023 11.063-8.883 19.922-19.922 19.922m-.023-15.68c1.124 0 1.757-.633 1.78-1.851l.352-12.375c.024-1.196-.914-2.086-2.156-2.086c-1.266 0-2.156.867-2.133 2.062l.305 12.399c.023 1.195.68 1.851 1.852 1.851m0 7.617c1.335 0 2.53-1.078 2.53-2.437c0-1.383-1.171-2.438-2.53-2.438c-1.383 0-2.532 1.078-2.532 2.438c0 1.336 1.172 2.437 2.532 2.437" />
                        </svg>
                    </div>
                    <div class="flex flex-col gap-y-2">
                        <div class="text-[#09090B] font-semibold">{{ ticket.subject }}</div>
                        <div class="text-xs text-[#6B7280] font-medium">
                            {{ ticket.customer.name }}
                        </div>
                    </div>
                    <span :class="getPriorityColor(ticket.priority, 'bg')" class="text-xs px-2 py-1 rounded-lg">
                        <span :class="getPriorityColor(ticket.priority, 'text')">
                            {{ t(`dashboard.${ticket.priority}`) }}
                        </span>
                    </span>
                    <span class="border-[#EAE6E6] border-[0.5px] text-black text-xs px-2 py-1 rounded-lg">
                        {{ t(`dashboard.${ticket.status}`) }}
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from "#i18n";
import { useDirection } from "~/composables/useDirection";
import { useTicketStore } from "~/store/ticketDashborad";
import { storeToRefs } from "pinia";
import type { Ticket } from "~/types/ticketDashborad";

const { t } = useI18n();
const { direction } = useDirection();
const ticketStore = useTicketStore();
const { sortedTickets } = storeToRefs(ticketStore);

const getPriorityColor = (priority: Ticket['priority'], colorCase: 'bg' | 'text' | 'fill') => {
    const colors = {
        urgent: { bg: 'bg-[#FEE2E2]', text: 'text-[#DC2626]', fill: '#DC2626' },
        high: { bg: 'bg-[#FFEDD5]', text: 'text-[#EA580C]', fill: '#EA580C' },
        medium: { bg: 'bg-[#DBEAFE]', text: 'text-[#2563EB]', fill: '#2563EB' },
        low: { bg: 'bg-[#DCFCE7]', text: 'text-[#10B981]', fill: '#10B981' },
    };
    return colors[priority][colorCase];
};
</script>

<style scoped>
.rounded-box li::after {
    border-bottom: none;
}
.rounded-box li:last-child {
    margin-bottom: 9px;
}
</style>
