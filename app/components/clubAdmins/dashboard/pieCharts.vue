<template>
    <div class="flex flex-col gap-y-9 mt-4 rounded-lg">
        <div class="flex gap-x-1.5 items-center px-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
                <path
                    fill="#16A34A"
                    d="M12 3a7 7 0 0 0-7 7c0 2.862 1.782 5.623 3.738 7.762A26 26 0 0 0 12 20.758q.262-.201.615-.49a26 26 0 0 0 2.647-2.504C17.218 15.623 19 12.863 19 10a7 7 0 0 0-7-7m0 20.214l-.567-.39l-.003-.002l-.006-.005l-.02-.014l-.075-.053l-.27-.197a28 28 0 0 1-3.797-3.44C5.218 16.875 3 13.636 3 9.999a9 9 0 0 1 18 0c0 3.637-2.218 6.877-4.262 9.112a28 28 0 0 1-3.796 3.44a17 17 0 0 1-.345.251l-.021.014l-.006.005l-.002.001zM12 8a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0a4 4 0 0 1-8 0" />
            </svg>
            <h3 class="text-[#09090B] text-xl font-bold">
                {{ t("dashboard.charts.chart2.title") }}
            </h3>
        </div>
        <div class="h-53 w-60 mx-auto">
            <Doughnut :data="chartData" :options="chartOptions" class="h-full" />
        </div>
        <div class="flex flex-col gap-y-3 px-3 mb-0">
            <div v-for="(facility, index) in facilities" :key="index" class="flex justify-between items-center w-full">
                <div class="flex items-center gap-x-2">
                    <span class="rounded-full w-3 h-3" :style="{ backgroundColor: facility.color }" />
                    <span class="text-xs text-[#09090B]">
                        {{ facility.name }}
                    </span>
                </div>
                <div class="flex items-center gap-x-2">
                    <span class="text-xs text-[#09090B]">
                        {{ facility.percentage }}%
                    </span>
                    <span class="text-[#16A34A] text-[11px]">
                        +{{ facility.increased }}%
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Doughnut } from "vue-chartjs";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";
import { useI18n } from "#i18n";

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const { t } = useI18n();

const facilities = [
    { name: t("dashboard.charts.chart2.facility1"), percentage: 32, increased: 12, color: "#F19224" },
    { name: t("dashboard.charts.chart2.facility2"), percentage: 28, increased: 18, color: "#C3D780" },
    { name: t("dashboard.charts.chart2.facility3"), percentage: 22, increased: 8, color: "#3357FF" },
    { name: t("dashboard.charts.chart2.facility4"), percentage: 12, increased: 25, color: "#001781" },
    { name: t("dashboard.charts.chart2.facility5"), percentage: 6, increased: 5, color: "#64748B" },
];

const chartData = {
    labels: facilities.map((f) => f.name),
    datasets: [
        {
            label: "Facility Usage",
            data: facilities.map((f) => f.percentage),
            backgroundColor: facilities.map((f) => f.color),
            borderColor: "#FFFFFF",
            borderWidth: 1,
            borderRadius: 5,
            offset: 10,
        },
    ],
};

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: { display: false },
        tooltip: { enabled: true },
        title: { display: false },
    },
};
</script>

<style></style>
