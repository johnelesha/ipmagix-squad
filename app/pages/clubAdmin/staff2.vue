<template>
    <section class="flex flex-col md:flex-row md:justify-between md:items-center">
        <breadcrumbs :last-breadcrumb="lastBreadcrumb" :extra-links="extraLinks" />
        <div class="ltr:mr-8 rtl:ml-8">Staff Management Content</div>
    </section>
</template>
<script setup>
import breadcrumbs from '@/components/sharedComponents/breadcrumbs.vue';
definePageMeta({
    layout: 'clubs-admin'
});
/* useSeoMeta({
    title: 'Club Admin - Staff Management',
    description: 'Manage your club staff efficiently and effectively.',
    keywords: 'club admin, staff management, manage staff, club staff',
    ogTitle: 'Club Admin - Staff Management',
    ogDescription: 'Manage your club staff efficiently and effectively.',
}); */
const { t } = useI18n();
const lastBreadcrumb = 'staffManagement.header';
const extraLinks = [];

useSeoMeta({
    title: () => t('staffManagement.title'),
    description: t('staffManagement.description'),
    keywords: t('staffManagement.keywords'),
    ogTitle: () => t('staffManagement.ogTitle'),
    ogDescription: t('staffManagement.ogDescription'),
});
</script>
<style></style>