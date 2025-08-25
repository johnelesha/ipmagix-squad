<template>
  <div
    class="bg-white rounded-2xl p-6 shadow-md backdrop-blur-sm flex flex-col justify-between w-[270px] h-[136px]"
  >
    <div class="flex justify-between items-center text-gray-700">
      <div>
        <h4 class="text-sm font-medium">{{ title }}</h4>
        <p class="text-2xl font-bold text-gray-900">{{ displayValue }}</p>
        <p class="text-sm" :class="changeColor">
          {{ change }}
        </p>
      </div>

      <div class="flex items-center justify-center rounded-xl" :class="iconBg">
        <slot name="icon" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";

const props = defineProps({
  title: { type: String, required: true },
  value: { type: [String, Number], required: true },
  change: { type: String, default: "" },
  status: {
    type: String,
    default: "neutral",
  },
  iconBg: { type: String, default: "bg-orange-100 w-12 h-12" },
  animated: { type: Boolean, default: true },
  duration: { type: Number, default: 1000 },
});

const changeColor = computed(() => {
  switch (props.status) {
    case "positive":
      return "text-green-500";
    case "negative":
      return "text-red-500";
    default:
      return "text-blue-500";
  }
});

const displayValue = ref(0);

onMounted(() => {
  if (props.animated && typeof props.value === "number") {
    let start = 0;
    const stepTime = Math.abs(Math.floor(props.duration / props.value));
    const timer = setInterval(() => {
      start++;
      displayValue.value = start;
      if (start >= props.value) clearInterval(timer);
    }, stepTime);
  } else {
    displayValue.value = props.value;
  }
});
</script>
