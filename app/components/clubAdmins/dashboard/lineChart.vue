<template>
    <div class="flex flex-col gap-y-8 mt-4 rounded-lg">
        <div class="flex justify-between items-center px-3">
            <h3 class="text-[#09090B] text-xl font-bold">
                {{ t("dashboard.charts.chart1.title") }}
            </h3>
            <span class="text-xs text-[#16A34A]">+35% Growth</span>
        </div>
        <div class="h-80">
            <Line :data="chartData" :options="chartOptions" class="h-full" />
        </div>
        <div class="flex justify-center gap-x-12 px-3 mb-4">
            <span class="text-sm text-[#F19224] flex items-center gap-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 24" width="1.2em" height="1.2em" aria-hidden="true">
                    <line x1="0" y1="12" x2="18" y2="12" stroke="#09090B" stroke-width="2" stroke-linecap="round" />
                    <line x1="30" y1="12" x2="48" y2="12" stroke="#09090B" stroke-width="2" stroke-linecap="round" />
                    <circle cx="24" cy="12" r="6" stroke="#09090B" stroke-width="2" fill="none" />
                </svg>
                {{ t("dashboard.charts.chart1.case") }}
            </span>
            <span class="text-sm text-[#3357FF] flex items-center gap-x-1">
                <span class="rounded-full p-1.5 bg-[#3357FF]" />{{ t("dashboard.charts.chart1.relate") }}
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Line } from "vue-chartjs";
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
} from "chart.js";
import { useI18n } from "#i18n";
import { computed } from "vue";

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale
);

const { t } = useI18n();

const generateMonthLabels = (count: number): string[] => {
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    return months.slice(0, count);
};

const revenueData = [4000, 9000, 5000, 12000, 10000, 16000, 13000, 5000];

const chartData = computed(() => ({
    labels: generateMonthLabels(revenueData.length),
    datasets: [
        {
            label: "Revenue Growth",
            data: revenueData,
            borderColor: "#F19224",
            backgroundColor: "#F19224",
            pointBackgroundColor: "#F19224",
            pointBorderColor: "#F19224",
            fill: false,
            tension: 0.4,
        },
    ],
}));

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: { display: false },
        title: { display: false }, // or use t("dashboard.charts.chart1.title")
        tooltip: { enabled: true },
    },
    scales: {
        y: {
            beginAtZero: true,
            // max: 18000, // Slightly above max data (17000)
            ticks: {
                stepSize: 3000,
            },
            grid: {
                display: false,
            },
            // title: { display: true, text: "Revenue ($)" },
        },
        x: {
            grid: {
                display: false,
            },
            // title: { display: true, text: "Month" },
        },
    },
};
</script>

<style></style>
