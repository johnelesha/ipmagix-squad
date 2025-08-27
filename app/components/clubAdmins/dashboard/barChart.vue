<template>
    <div class="flex flex-col gap-y-8 mt-4 rounded-lg">
        <div class="flex gap-x-1.5 items-center px-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24">
                <path
                    fill="#2563EB" fill-rule="evenodd"
                    d="M10.053 5.252a.75.75 0 0 1 .658.51l3.428 10.283l2.19-4.38A.75.75 0 0 1 17 11.25h2a.75.75 0 1 1 0 1.5h-1.537l-2.792 5.585a.75.75 0 0 1-1.382-.098L9.86 7.955l-2.19 4.38a.75.75 0 0 1-.67.415H5a.75.75 0 0 1 0-1.5h1.536L9.33 5.665a.75.75 0 0 1 .724-.413"
                    clip-rule="evenodd" />
            </svg>
            <h3 class="text-[#09090B] text-xl font-bold">
                {{ t("dashboard.charts.chart3.title") }}
            </h3>
        </div>
        <div class="h-60">
            <Bar :data="chartData" :options="chartOptions" class="h-full" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { Bar } from "vue-chartjs";
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
} from "chart.js";
import type { ChartOptions } from "chart.js";
import { useI18n } from "#i18n";

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
);

const { t } = useI18n();

const chartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
        {
            label: "Bookings",
            data: [10, 15, 32, 18, 20, 25, 22],
            backgroundColor: "#C3D780",
            yAxisID: "y",
        },
        {
            label: "Revenue",
            data: [1500, 2000, 4200, 2500, 2800, 3200, 3000],
            backgroundColor: "#F19224",
            yAxisID: "y1",
        },
    ],
};

const chartOptions: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: { display: false },
        tooltip: {
            enabled: true,
            callbacks: {
                label: (context) => {
                    const bookings = chartData.datasets[0]?.data?.[context.dataIndex] || 0;
                    const revenue = chartData.datasets[1]?.data?.[context.dataIndex] || 0;
                    return [
                        `Bookings: ${bookings}`,
                        `Revenue: $${revenue.toLocaleString()}`,
                    ];
                },
            },
        },
    },
    scales: {
        y: {
            type: "linear",
            position: "left",
            beginAtZero: true,
            ticks: {
                stepSize: 15,
            },
            grid: {
                display: false,
            },
        },
        y1: {
            type: "linear",
            position: "right",
            beginAtZero: true,
            ticks: {
                stepSize: 1000,
            },
            grid: {
                display: false,
            },
        },
        x: {
            grid: {
                display: false,
            },
        },
    },
};
</script>

<style></style>
