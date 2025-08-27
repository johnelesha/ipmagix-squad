<template>
    <section class="flex justify-center items-center gap-x-5 mt-7 rounded-lg">
        <div class="bg-white p-4 rounded-lg shadow w-[50%]">
            <RecentBooking />
        </div>
        <div class="bg-white p-4 rounded-lg shadow w-[50%]">
            <SupportTickets />
        </div>
    </section>
</template>

<script setup>
import RecentBooking from "./recentBooking.vue";
import SupportTickets from "./supportTickets.vue";
</script>

<style></style>
