<template>
    <!-- <div v-for="card in cards" :key="card.id" class="bg-white rounded-2xl shadow p-4" dir="auto">
        <h3 class="text-lg font-semibold">
            {{ t(`dashboard.cards.${card.id}.title`) }}
        </h3>
        <p class="text-sm text-gray-600 mt-2">
            {{ t(`dashboard.cards.${card.id}.track`) }}
        </p>
    </div> -->
    <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        <div v-for="card in cards" :key="card.id" dir="auto">
            <Card
                :id="card.id" :title="t(`dashboard.cards.${card.id}.title`)" :value="card.value"
                :value-format="card.valueFormat" :change="card.change" :change-format="card.changeFormat"
                :change-case="card.changeCase" :status="card.status" :animated="card.animated" :icon-bg="card.iconBg"
                :icon-path="card.iconPath" :icon-width="card.width" :icon-height="card.height" :icon-fill="card.fill" />
        </div>
    </section>
</template>

<script lang="ts" setup>
import { useI18n } from "#i18n";
import Card from "~/components/sharedComponents/Card2.vue";
import type { CardData } from "~/types/cardData";

defineProps<{
    cards: CardData[];
}>();

const { t } = useI18n();
</script>
