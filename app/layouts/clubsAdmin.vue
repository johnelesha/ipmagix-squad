<template>
    <div class="clubAdmin flex relative max-w-[1400px] mx-auto" :dir="direction">
        <header class="z-50 md:static absolute top-14 sm:top-5 ltr:left-3 ltr:sm:left-5 rtl:right-3 rtl:sm:right-5">
            <Sidebar />
        </header>
        <div class="flex-auto md:flex-1 z-10">
            <Navbar />
            <slot />
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
</style>
