<template>
    <div>
        <!-- <NuxtPage /> -->
    </div>
</template>
<script setup>
definePageMeta({
    layout: 'clubs-admin'
})
useSeoMeta({
    title: 'Club Admin',
    description: 'Manage your club settings, profile, academies, staff.',
    keywords: 'club admin, manage club, club settings, club profile, club academies, club staff',
    ogTitle: 'Club Admin - Manage Your Club',
    ogDescription: 'Manage your club settings, profile, academies, and staff with ease.',
});
navigateTo('/clubAdmin/dashboard');
</script>
<style></style>