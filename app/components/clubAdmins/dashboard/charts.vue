<template>
    <section class="flex flex-col gap-y-8 mt-7 rounded-lg">
        <div class="grid grid-cols-1 md:grid-cols-5 gap-x-9">
            <div class="col-span-3 bg-white p-4 rounded-lg shadow">
                <LineChart />
            </div>
            <div class="col-span-2 bg-white p-4 rounded-lg shadow">
                <PieCharts />
            </div>
        </div>
        <div class="w-full bg-white p-4 rounded-lg shadow">
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