<template>
    <section class="grid grid-cols-1 md:grid-cols-5 gap-y-7 md:gap-y-8 md:gap-x-9 mt-7 rounded-lg">
        <div class="md:col-span-3 bg-white p-4 rounded-lg shadow">
            <LineChart />
        </div>
        <div class="md:col-span-2 bg-white p-4 rounded-lg shadow">
            <PieCharts />
        </div>
        <div class="md:col-span-5 bg-white p-4 rounded-lg shadow">
            <BarChart />
        </div>
    </section>
</template>

<script setup lang="ts">
import BarChart from './barChart.vue';
import LineChart from './lineChart.vue';
import PieCharts from './pieCharts.vue';
</script>

<style></style>