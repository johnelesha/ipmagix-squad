<template>
    <div class="breadcrumbs text-sm px-5 py-8" :dir="direction">
        <ul class="flex" :class="{ 'flex-row-reverse': direction === 'rtl' }">
            <li>
                <nuxt-link to="/clubAdmin/dashboard" class="text-[#6B7280] hover:text-[#111827]">
                    Dashboard
                </nuxt-link>
            </li>
            <li v-for="(link, index) in extraLinks" :key="index">
                <nuxt-link :to="link.to" class="text-[#6B7280] hover:text-[#111827]">
                    {{ $t(link.name) }}
                </nuxt-link>
            </li>
            <li>{{ $t(lastBreadcrumb) }}</li>
        </ul>
        <h2 class="mt-3 text-2xl">{{ $t(lastBreadcrumb) }}</h2>
    </div>
</template>

<script setup>
import { useI18n } from '#i18n';
import { useDirection } from '~/composables/useDirection';

defineProps({
    lastBreadcrumb: {
        type: String,
        required: true,
    },
    extraLinks: {
        type: Array,
        default: () => [],
        validator: (links) =>
            links.every((link) => typeof link === 'object' && 'to' in link && 'name' in link),
    },
});

const { t: _t } = useI18n();
const { direction } = useDirection();
</script>

<style></style>