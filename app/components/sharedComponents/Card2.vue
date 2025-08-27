<template>
    <div class="bg-white rounded-2xl px-4 py-6 shadow-md backdrop-blur-sm flex flex-col justify-between min-h-[110px]">
        <div class="flex justify-between items-center text-gray-700">
            <div>
                <h4 class="text-sm font-medium mb-2">{{ title }}</h4>
                <p class="text-2xl font-bold text-gray-900 mb-2">
                    {{ formatValue(displayValue) }}
                </p>
                <p class="text-sm" :class="changeColor">
                    {{ formatChange(props.change) }}
                </p>
            </div>
            <div class="flex items-center justify-center rounded-xl" :class="iconBg">
                <svg
                    :width="iconWidth" :height="iconHeight" viewBox="0 0 22 20" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path :d="iconPath" :fill="iconFill" />
                </svg>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from "vue";
import { useI18n } from "#i18n";

const { t } = useI18n();

const props = defineProps({
    id: { type: String, required: true },
    title: { type: String, required: true },
    value: { type: [String, Number], required: true },
    valueFormat: { type: String, default: "number" },
    change: { type: [String, Number], default: "" },
    changeFormat: { type: String, default: "number" },
    changeCase: { type: String, default: "" },
    status: { type: String, default: "neutral" },
    iconBg: { type: String, default: "bg-[#F192241A] w-12 h-12" },
    animated: { type: Boolean, default: true },
    duration: { type: Number, default: 1000 },
    iconPath: { type: String, required: true },
    iconWidth: { type: Number, required: true },
    iconHeight: { type: Number, required: true },
    iconFill: { type: String, required: true },
});

const changeColor = computed(() => {
    switch (props.status) {
        case "positive":
            return "text-[#16A34A]";
        case "negative":
            return "text-[#EA580C]";
        default:
            return "text-[#2563EB]";
    }
});

const displayValue = ref<string | number>(
    typeof props.value === "number" ? 0 : props.value
);

const formatValue = (value: string | number) => {
    if (props.valueFormat === "currency" && typeof value === "number") {
        return `$${value}`;
    }
    return value.toString();
};

const formatChange = (change: string | number) => {
    const track = t(`dashboard.cards.${props.id}.track`);
    const prefix = props.changeCase === 'plus' && typeof change === 'number' ? '+' : '';
    
    if (props.changeFormat === "percentage" && typeof change === "number") {
        return `${prefix}${change}% ${track}`;
    }
    return `${prefix}${change} ${track}`;
};

onMounted(() => {
    if (props.animated && typeof props.value === "number") {
        let start = 0;
        const value = Number(props.value);
        const stepTime = Math.abs(Math.floor(props.duration / value));
        const timer = setInterval(() => {
            start++;
            displayValue.value = start;
            if (start >= value) clearInterval(timer);
        }, stepTime);
    } else {
        displayValue.value = props.value;
    }
});
</script>
