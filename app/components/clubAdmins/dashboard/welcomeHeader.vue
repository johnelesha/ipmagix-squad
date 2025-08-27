<template>
    <section class="bg-[#F19224] text-white py-7 px-5 rounded-xl mb-6">
        <h2 class="text-2xl font-bold mb-2 leading-8">
            {{ $t("dashboard.welcome") }}
        </h2>
        <p class="text-xl leading-7 mt-4">{{ t("dashboard.summary") }}</p>
        <p class="flex items-center text-sm leading-5 mt-5 gap-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                <path
                    fill="currentColor"
                    d="M19 4h-2V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h16Zm0-9H4V7a1 1 0 0 1 1-1h2v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h2a1 1 0 0 1 1 1Z" />
            </svg>
            {{ currentDate }}

            &nbsp; &nbsp;

            <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24">
                <path
                    fill="currentColor" fill-rule="evenodd"
                    d="M10.053 5.252a.75.75 0 0 1 .658.51l3.428 10.283l2.19-4.38A.75.75 0 0 1 17 11.25h2a.75.75 0 1 1 0 1.5h-1.537l-2.792 5.585a.75.75 0 0 1-1.382-.098L9.86 7.955l-2.19 4.38a.75.75 0 0 1-.67.415H5a.75.75 0 0 1 0-1.5h1.536L9.33 5.665a.75.75 0 0 1 .724-.413"
                    clip-rule="evenodd" />
            </svg>
            {{ t("dashboard.status") }}
        </p>
    </section>
</template>

<script lang="ts" setup>
import { useI18n } from "#i18n";

const { t, locale } = useI18n();

const getOrdinalSuffix = (day: number): string => {
    if (locale.value !== "en") return "";
    const j = day % 10,
        k = day % 100;
    if (j === 1 && k !== 11) return "st";
    if (j === 2 && k !== 12) return "nd";
    if (j === 3 && k !== 13) return "rd";
    return "th";
};

const currentDate = computed(() => {
    const date = new Date();
    const localeStr = locale.value === "en" ? "en-US" : "ar-AR";
    const formattedDate = date.toLocaleDateString(localeStr, {
        weekday: "long",
        month: "long",
        day: "numeric",
    });
    return locale.value === "en"
        ? `${formattedDate}${getOrdinalSuffix(date.getDate())}`
        : formattedDate;
});
</script>

<style></style>
