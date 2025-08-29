<template>
    <section class="grid grid-cols-1 md:grid-cols-2 px-0 gap-y-7 md:gap-x-5 md:gap-y-0 mt-7 rounded-lg">
        <div class="bg-white py-4 px-2 rounded-lg shadow w-full">
            <RecentBooking />
        </div>
        <div class="bg-white py-4 px-2 rounded-lg shadow w-full">
            <SupportTickets />
        </div>
    </section>
</template>

<script setup>
import RecentBooking from "./recentBooking.vue";
import SupportTickets from "./supportTickets.vue";
</script>

<style></style>
