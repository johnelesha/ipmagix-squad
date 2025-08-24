<template>
    <div class="clubAdmin flex" :dir="direction">
        <div class="z-50">
            <Sidebar />
        </div>
        <div class="flex-auto sm:flex-1 z-10">
            <Navbar />
            <main class="">
                <slot />
            </main>
        </div>
    </div>
</template>
<script setup>
import Navbar from "@/components/clubAdmins/Navbar.vue";
import Sidebar from "@/components/clubAdmins/Sidebar.vue";
import { useDirection } from "~/composables/useDirection";

const { direction } = useDirection();
</script>

<style scoped>
.clubAdmin[dir="rtl"] {
    flex-direction: row-reverse;
}
</style>
